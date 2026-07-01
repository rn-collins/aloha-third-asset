// Inquiry endpoint — accepts { name, email, type, message, source }
// Maps `type` to `inquiry` for compatibility with notification templates.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, type, message, source: bodySource } = req.body
  const inquiry = type // alias
  const source = bodySource || req.headers.host || 'aloha-third-asset'

  if (!name || !email || !type) return res.status(400).json({ error: 'Name, email, and inquiry type are required.' })

  const ts = Date.now()

  // ── Upstash Redis ─────────────────────────────────────────────────────────
  try {
    await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/set/contacts:${ts}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        JSON.stringify({ name, email, inquiry, message, source, ts }),
        'EX',
        60 * 60 * 24 * 90,
      ]),
    })
  } catch {}

  // ── Slack notification ────────────────────────────────────────────────────
  try {
    await fetch(process.env.SLACK_INQUIRIES_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `📬 *New inquiry via ${source}*\n*Name:* ${name}\n*Email:* ${email}\n*Type:* ${inquiry}\n*Message:* ${message || '—'}`,
      }),
    })
  } catch {}

  // ── Confirmation email to sender ──────────────────────────────────────────
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'RN Collins <onboarding@resend.dev>',
        to: email,
        subject: 'Got your message — RN Collins · Aloha AI Consulting',
        html: `<div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:40px 24px;color:#1C1B1F"><div style="font-size:13px;font-weight:600;color:#1B7A68;margin-bottom:16px">Aloha AI Consulting</div><h1 style="font-size:22px;font-weight:600;margin:0 0 16px">Hi ${name} — message received.</h1><p style="font-size:15px;line-height:1.7;color:#5A5857;margin:0 0 24px">Thanks for reaching out about <strong>${inquiry}</strong>. I'll be in touch within one business day.</p><p style="font-size:13px;color:#8A8784;margin:0">— RN Collins<br>Neuroscientist · JD Candidate, Northeastern · Founder, Aloha AI Consulting</p></div>`,
      }),
    })
  } catch {}

  // ── Internal notification email ───────────────────────────────────────────
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Aloha AI Leads <onboarding@resend.dev>',
        to: process.env.RN_EMAIL,
        subject: `New ${inquiry} inquiry from ${name}`,
        html: `<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px"><div style="font-size:13px;font-weight:600;color:#1B7A68;margin-bottom:12px">New inquiry via ${source}</div><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><p><strong>Type:</strong> ${inquiry}</p><p><strong>Message:</strong> ${message || '—'}</p></div>`,
      }),
    })
  } catch {}

  return res.status(200).json({ ok: true })
}

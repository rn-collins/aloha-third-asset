import Head from 'next/head'
import {useMemo,useState} from 'react'

const checks=[
 {id:'synthetic',label:'Synthetic people or voice',prompt:'Does the work depict a real or invented person using generated image, voice, or likeness?',weight:3,owner:'Rights & legal',action:'Document identity, consent, scope, territory, term, revocation, and model/vendor provenance.'},
 {id:'endorsement',label:'Endorsement or testimonial',prompt:'Could an audience reasonably read the content as a person’s experience, opinion, or recommendation?',weight:3,owner:'Brand & legal',action:'Verify the endorser and experience; make material connections clear and conspicuous.'},
 {id:'training',label:'Third-party training inputs',prompt:'Were client, creator, licensed, confidential, or scraped materials supplied to an AI system?',weight:3,owner:'Data & procurement',action:'Record inputs, permissions, retention terms, vendor controls, and prohibited downstream uses.'},
 {id:'music',label:'Generated music, style, or performance',prompt:'Does the output imitate a recognizable artist, voice, composition, recording, or protected character?',weight:2,owner:'Business affairs',action:'Run composition, recording, performance, likeness, and style-risk review before release.'},
 {id:'disclosure',label:'No audience-facing disclosure plan',prompt:'Is there no tested decision for when, where, and how synthetic or sponsored content will be disclosed?',weight:2,owner:'Creative & compliance',action:'Design disclosure in the audience journey and test clarity, proximity, persistence, and accessibility.'},
 {id:'monitoring',label:'No post-launch monitoring',prompt:'Is there no named owner for complaints, misuse, impersonation, takedowns, or material output changes?',weight:2,owner:'Operations',action:'Name an incident owner; define detection, escalation, takedown, evidence preservation, and response timing.'}
]
const sources=[
 ['16 CFR Part 255 — Endorsement Guides','Truthful endorsements, material connections, virtual influencers, and clear disclosures.','https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-255'],
 ['16 CFR Part 465 — Reviews & Testimonials','The final rule addresses fake or false reviews and testimonials, including specified AI-generated material.','https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-465'],
 ['U.S. Copyright Office: Copyright and AI','Primary reports and guidance on digital replicas, copyrightability, and AI training.','https://www.copyright.gov/ai/'],
 ['NIST AI 600-1: Generative AI Profile','Voluntary cross-sector risk-management actions for generative AI.','https://doi.org/10.6028/NIST.AI.600-1']
]
const projects=[
 ['Culture Governance Audit','Campaign-level issue spotting','https://aloha-governance-audit.vercel.app'],
 ['Creator Rights Framework','Creator-partnership decision path','https://aloha-creator-rights.vercel.app'],
 ['Behavioral Intelligence Layer','Evidence-led behavior analysis','https://aloha-behavioral-intelligence.vercel.app']
]

export default function ThirdAsset(){
 const [answers,setAnswers]=useState(Object.fromEntries(checks.map(c=>[c.id,'unknown'])))
 const [stage,setStage]=useState('concept')
 const [copied,setCopied]=useState(false)
 const result=useMemo(()=>{
   const active=checks.filter(c=>answers[c.id]==='yes')
   const unknown=checks.filter(c=>answers[c.id]==='unknown')
   const raw=active.reduce((n,c)=>n+c.weight,0)+unknown.reduce((n,c)=>n+Math.ceil(c.weight/2),0)
   const stageAdd={concept:0,production:2,live:4}[stage]
   const score=Math.min(18,raw+stageAdd)
   const band=score>=12?'Pause & resolve':score>=7?'Controlled review':'Standard review'
   return {active,unknown,score,band}
 },[answers,stage])
 const report=`THIRD ASSET CAMPAIGN BRIEF
Status: ${result.band} · score ${result.score}/18
Lifecycle: ${stage}
Confirmed flags: ${result.active.map(x=>x.label).join(', ')||'None'}
Unknowns: ${result.unknown.map(x=>x.label).join(', ')||'None'}
Next actions:
${[...result.active,...result.unknown].map((x,i)=>`${i+1}. [${x.owner}] ${x.action}`).join('\n')||'1. Preserve the decision record and proceed through ordinary review.'}
Generated locally in the browser. This is issue-spotting, not legal advice.`
 const copy=async()=>{await navigator.clipboard.writeText(report);setCopied(true);setTimeout(()=>setCopied(false),1800)}
 const download=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([report],{type:'text/plain'}));a.download='third-asset-campaign-brief.txt';a.click();URL.revokeObjectURL(a.href)}
 return <><Head>
  <title>The Third Asset — AI Campaign Governance Workbench</title>
  <meta name="description" content="A browser-local workbench for mapping synthetic-media, creator-rights, disclosure, provenance, and incident-response decisions."/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://aloha-third-asset.vercel.app/"/>
  <meta property="og:title" content="The Third Asset — AI Campaign Governance Workbench"/>
  <meta property="og:description" content="Map synthetic-media, creator-rights, disclosure, provenance, and incident-response decisions in a browser-local workbench."/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://aloha-third-asset.vercel.app/"/>
  <meta property="og:image" content="https://aloha-third-asset.vercel.app/og.png"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:image:alt" content="The Third Asset — creative velocity needs a governance operating system. Six gating questions producing a Standard review, Controlled review, or Pause and resolve decision."/>
  <meta property="og:site_name" content="Aloha AI Consulting"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:image" content="https://aloha-third-asset.vercel.app/og.png"/>
 </Head>
 <div className="shell">
  <a className="skipLink" href="#workbench">Skip to the workbench</a>
  <header><a className="brand" href="#top">Aloha AI Consulting</a><nav><a href="#workbench">Workbench</a><a href="#sources">Sources</a><a href="#method">Method</a></nav></header>
  <main id="top">
   <section className="hero">
    <p className="eyebrow">The Third Asset · Verified 18 August 2026 · Review due 18 September 2026</p>
    <h1>Creative velocity needs a governance operating system.</h1>
    <p className="lede">Move from an argument about AI risk to a decision record your creative, legal, rights, data, and operations teams can actually use.</p>
    <div className="heroActions"><a className="primary" href="#workbench">Map a campaign</a><a className="secondary" href="#method">Read the operating model</a></div>
    <div className="principles"><span>Browser-local</span><span>No account</span><span>No data transmission</span><span>Exportable brief</span></div>
   </section>

   <section id="workbench" className="workbench">
    <div className="sectionHead"><div><p className="eyebrow">Interactive workbench</p><h2>Campaign exposure map</h2></div><p>Answer six gating questions. “Unknown” is treated as an unresolved control—not as a safe answer.</p></div>
    <div className="stage"><strong>Lifecycle stage</strong>{['concept','production','live'].map(s=><button key={s} onClick={()=>setStage(s)} aria-pressed={stage===s}>{s}</button>)}</div>
    <div className="grid">
     <div className="questions">{checks.map((c,i)=><article className="question" key={c.id}>
      <div className="qtop"><span>{String(i+1).padStart(2,'0')}</span><h3>{c.label}</h3></div><p>{c.prompt}</p>
      <div className="choices" role="group" aria-label={c.label}>{['no','unknown','yes'].map(v=><button key={v} className={answers[c.id]===v?'selected':''} onClick={()=>setAnswers(a=>({...a,[c.id]:v}))} aria-pressed={answers[c.id]===v}>{v}</button>)}</div>
     </article>)}</div>
     <aside className="result" aria-live="polite">
      <p className="eyebrow">Decision state</p><div className={'score '+(result.score>=12?'red':result.score>=7?'amber':'green')}>{result.score}<small>/18</small></div>
      <h2>{result.band}</h2>
      <p>{result.score>=12?'Do not release until critical ownership, rights, disclosure, or response controls are resolved.':result.score>=7?'Route the work through named owners and close every unknown before release.':'No critical signal is confirmed. Preserve the record and complete ordinary review.'}</p>
      <div className="meter"><i style={{width:`${result.score/18*100}%`}}/></div>
      <h3>Action queue</h3>
      <ol>{[...result.active,...result.unknown].map(x=><li key={x.id}><strong>{x.owner}</strong>{x.action}{answers[x.id]==='unknown'&&<em>Unresolved</em>}</li>)}</ol>
      {!result.active.length&&!result.unknown.length&&<p className="clear">All gates answered “No.” Recheck if scope, assets, vendors, or distribution change.</p>}
      <div className="export"><button onClick={copy}>{copied?'Copied':'Copy brief'}</button><button onClick={download}>Download .txt</button></div>
      <button className="reset" onClick={()=>{setAnswers(Object.fromEntries(checks.map(c=>[c.id,'unknown'])));setStage('concept')}}>Reset assessment</button>
     </aside>
    </div>
   </section>

   <section id="method" className="method">
    <div className="sectionHead"><div><p className="eyebrow">Operating model</p><h2>Governance becomes an asset when it is reusable.</h2></div></div>
    <div className="pillars">{[
     ['01','Intake','Capture use case, people, inputs, vendors, claims, territories, and distribution before production.'],
     ['02','Decision rights','Assign who can approve, pause, remediate, document, and release—by risk, not hierarchy alone.'],
     ['03','Evidence','Attach permissions, source records, tests, disclosures, approvals, and vendor terms to the decision.'],
     ['04','Monitoring','Watch for drift, misuse, complaints, platform changes, and incidents after the campaign ships.']
    ].map(x=><article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div>
    <div className="boundary"><strong>Important boundary</strong><p>This tool produces a structured issue-spotting brief. It does not determine legality, clear rights, replace counsel, or guarantee regulatory compliance. Scores are workflow triage—not a validated risk model.</p></div>
   </section>

   <section id="sources" className="sources">
    <div className="sectionHead"><div><p className="eyebrow">Primary source layer</p><h2>What the workflow is anchored to</h2></div><p>Links go to the issuing U.S. agencies. Verify current law, jurisdiction, platform rules, and contract terms for the actual campaign.</p></div>
    <div className="sourceGrid">{sources.map(s=><a href={s[2]} target="_blank" rel="noreferrer" key={s[0]}><h3>{s[0]} ↗</h3><p>{s[1]}</p></a>)}</div>
   </section>

   <section className="suite"><p className="eyebrow">Connected product layer</p><h2>Continue into a specialist workflow.</h2><div>{projects.map(p=><a href={p[2]} target="_blank" rel="noreferrer" key={p[0]}><strong>{p[0]}</strong><span>{p[1]} ↗</span></a>)}</div></section>
  </main>
  <footer><div><strong>The Third Asset</strong><p>Decision infrastructure for AI-enabled creative work.</p></div><div><a href="mailto:collins.ra@northeastern.edu">Email RN Collins</a><a href="https://linkedin.com/in/rn-collins" target="_blank" rel="noreferrer">LinkedIn</a></div><small>Privacy: assessment inputs remain in your browser and are discarded when the page closes. No analytics or form endpoints are used.</small></footer>
 </div>
 <style jsx global>{`
 *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--font);-webkit-font-smoothing:antialiased}a{color:inherit}.shell{min-height:100vh}header{position:sticky;top:0;z-index:20;display:flex;justify-content:space-between;align-items:center;padding:18px max(24px,5vw);background:rgba(238,236,229,.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}.brand{text-decoration:none;font-weight:800;letter-spacing:-.02em}nav{display:flex;gap:22px}nav a{font-family:var(--mono);font-size:12px;text-decoration:none;color:#42504c}.hero{padding:100px max(24px,8vw) 84px;background:radial-gradient(circle at 80% 20%,var(--glow),transparent 35%),var(--forest);color:#f6f3ea}.eyebrow{font-family:var(--mono);text-transform:uppercase;letter-spacing:.1em;font-size:11px;font-weight:600;color:var(--accent)}.hero .eyebrow{color:var(--mint)}.hero h1{font-family:var(--font);font-weight:700;font-size:clamp(42px,6.4vw,84px);line-height:1;letter-spacing:-.035em;max-width:1100px;margin:22px 0}.lede{font-size:clamp(18px,2vw,24px);line-height:1.55;color:#c8d8d2;max-width:760px}.heroActions{display:flex;gap:12px;margin:34px 0}.primary,.secondary{padding:14px 18px;border-radius:var(--r);text-decoration:none;font-weight:600;font-size:14px}.primary{background:var(--on-action);color:var(--ink)}.secondary{border:1px solid #66837a}.principles{display:flex;flex-wrap:wrap;gap:12px}.principles span{font-family:var(--mono);font-size:11px;padding:7px 10px;border-radius:var(--r);background:#20463e;color:#cfdedb}.workbench,.method,.sources,.suite{padding:80px max(24px,5vw)}.sectionHead{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:32px}.sectionHead h2,.suite h2{font:700 clamp(30px,3.7vw,50px)/1.06 var(--font);letter-spacing:-.03em;margin:8px 0}.sectionHead>p{max-width:500px;color:#525c59;line-height:1.6}.stage{display:flex;align-items:center;gap:8px;padding:14px;background:var(--paper-2);border-radius:var(--r);margin-bottom:18px}.stage strong{margin-right:auto;font-family:var(--mono);font-size:12px;text-transform:uppercase;letter-spacing:.08em}.stage button,.choices button,.export button,.reset{font-family:var(--mono);font-size:12px;border:1px solid var(--line);background:#fff;padding:9px 12px;border-radius:var(--r);text-transform:capitalize;cursor:pointer}.stage button[aria-pressed=true]{background:var(--ink);color:var(--on-action);border-color:var(--ink)}.grid{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(320px,.8fr);gap:20px;align-items:start}.questions{display:grid;grid-template-columns:1fr 1fr;gap:12px}.question{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:20px;min-height:220px}.qtop{display:flex;gap:12px;align-items:start}.qtop span{font-family:var(--mono);font-size:12px;color:var(--accent);font-weight:600}.qtop h3{margin:0;font-size:17px}.question p{color:#525c59;line-height:1.55;font-size:14px}.choices{display:flex;gap:7px;margin-top:18px}.choices button{flex:1}.choices .selected{background:var(--ink);color:var(--on-action);border-color:var(--ink)}.result{position:sticky;top:82px;background:var(--forest-2);color:#eff5f1;border-radius:var(--r);padding:26px}.score{font-family:var(--mono);font-size:62px;font-weight:700;line-height:1;margin:16px 0;font-variant-numeric:tabular-nums;letter-spacing:-.03em}.score small{font-size:18px;color:#a7bcb5}.score.green{color:#74d4a9}.score.amber{color:#f0b859}.score.red{color:#ff8b74}.result h2{font:600 30px/1.15 var(--font);letter-spacing:-.02em;margin:8px 0}.result>p{color:#bfd0ca;line-height:1.55}.meter{height:7px;background:#294741;border-radius:0;overflow:hidden;margin:20px 0}.meter i{display:block;height:100%;background:#f0b859;transition:width .25s}.result h3{font-family:var(--mono);font-size:11px;text-transform:uppercase;letter-spacing:.1em}.result ol{padding-left:20px;max-height:330px;overflow:auto}.result li{padding:8px 0;color:#d6e1dd;font-size:13px;line-height:1.45}.result li strong{display:block;font-family:var(--mono);font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#e3d9c6}.result li em{display:inline-block;margin-top:4px;background:#624e25;color:#ffe09d;padding:2px 6px;border-radius:4px;font-size:10px}.export{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:18px}.export button{background:var(--on-action);color:var(--ink);border:0;font-weight:600}.reset{width:100%;margin-top:8px;background:transparent;color:#c4d5cf;border-color:#5b7a72}.clear{padding:12px;background:#21463e;border-radius:var(--r)}.method{background:var(--paper-2)}.pillars{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.pillars article{background:#faf9f5;padding:24px;border-top:3px solid var(--accent)}.pillars span{font-family:var(--mono);font-size:12px;color:var(--accent);font-weight:600}.pillars h3{font-size:18px}.pillars p,.boundary p{font-size:14px;color:#525c59;line-height:1.6}.boundary{margin-top:20px;padding:22px;border:1px solid var(--line);border-radius:var(--r)}.boundary p{margin-bottom:0}.sourceGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.sourceGrid a{display:block;text-decoration:none;background:#fff;border:1px solid var(--line);padding:22px;border-radius:var(--r)}.sourceGrid h3{font-size:16px}.sourceGrid p{color:#525c59;line-height:1.5;font-size:14px}.suite{background:var(--ink);color:var(--on-action)}.suite .eyebrow{color:#9be2cb}.suite>div{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.suite a{background:#20302c;color:#f6f3ea;text-decoration:none;padding:18px;border-radius:var(--r);border:1px solid #3a4a45}.suite a span{display:block;font-family:var(--mono);color:#b8c9c4;font-size:11px;margin-top:6px}footer{display:grid;grid-template-columns:1fr auto;gap:30px;padding:42px max(24px,5vw);background:#0e1e1b;color:#d5e0dc}footer p,footer small{color:#9db2ab}footer div:nth-child(2){display:flex;gap:18px}footer small{grid-column:1/-1;font-size:11px}@media(max-width:900px){.grid{grid-template-columns:1fr}.result{position:static}.pillars{grid-template-columns:1fr 1fr}.suite>div{grid-template-columns:1fr}.sectionHead{display:block}}@media(max-width:620px){header nav{display:none}.hero{padding-top:70px}.heroActions{flex-direction:column}.questions,.sourceGrid,.pillars{grid-template-columns:1fr}.stage{flex-wrap:wrap}.stage strong{width:100%}.question{min-height:auto}footer{grid-template-columns:1fr}.sectionHead{margin-bottom:22px}}
 `}</style></>
}
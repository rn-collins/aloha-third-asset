import Head from 'next/head'
import { useState } from 'react'

const G='#1B7A68',GD='#0F5E50',GL='#E8F5F2',BG='#F6F3EC',TX='#1C1B1F',MU='#5A5857',BD='#E2DDD6',AM='#B8842A',AMB='#FAEEDA'

export default function ThirdAsset(){
  const [contactOpen,setContactOpen]=useState(false)
  return(<>
    <Head>
      <title>The Third Asset — RN Collins</title>
      <meta name="description" content="Why Creative and Cultural Intelligence Aren't Enough Anymore"/>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Syne:wght@400;500;600;700&family=Manrope:wght@400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
    </Head>
    <ContactModal isOpen={contactOpen} onClose={()=>setContactOpen(false)}/>
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',background:BG}}>
      <div style={{background:G,height:4}}/>
      <main style={{flex:1,maxWidth:720,margin:'0 auto',padding:'80px 48px 120px',width:'100%'}}>

        {/* Masthead */}
        <div style={{borderLeft:`3px solid ${G}`,paddingLeft:20,marginBottom:64}}>
          <div style={{fontFamily:'Syne',fontSize:11,fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',color:G,marginBottom:12}}>Aloha AI Consulting &nbsp;·&nbsp; Culture &amp; Technology Intelligence</div>
          <h1 style={{fontFamily:'Cormorant Garamond',fontSize:46,fontWeight:500,lineHeight:1.1,color:TX,marginBottom:14}}>The Third Asset:<br/>Why Creative and Cultural Intelligence Aren't Enough Anymore</h1>
          <p style={{fontFamily:'Syne',fontSize:14,color:MU,letterSpacing:'0.02em',marginBottom:28}}>On the governance layer nobody is building — and what happens when a client asks first</p>
          <div style={{display:'flex',alignItems:'center',gap:16,paddingTop:28,borderTop:`1px solid ${BD}`}}>
            <div style={{width:36,height:36,borderRadius:'50%',background:G,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne',fontSize:11,fontWeight:600,color:'white',flexShrink:0}}>RN</div>
            <div style={{fontSize:13,color:MU}}>
              <strong style={{color:TX,fontWeight:500,display:'block',fontSize:14}}>RN Collins</strong>
              Neuroscientist &nbsp;·&nbsp; JD Candidate, Northeastern &nbsp;·&nbsp; AI Governance Researcher, Brown University
            </div>
          </div>
        </div>

        {/* Opening */}
        <div style={{fontFamily:'Cormorant Garamond',fontSize:22,fontStyle:'italic',lineHeight:1.6,color:TX,marginBottom:48,padding:'32px 36px',background:'white',borderRadius:4,borderLeft:`3px solid ${G}`}}>
          AI is collapsing the cost of execution. That changes what an agency is worth — but not in the way most people are arguing about.
        </div>

        <p style={{fontFamily:'Manrope',fontSize:16,color:TX,lineHeight:1.85,marginBottom:20}}>The timesheet model is dying. Everyone in the industry knows it. The harder question isn't how you price time differently — it's what you price instead. The answer most agencies land on is cultural intelligence: the ability to read what's happening in culture before it becomes a trend, and to build work that connects with it authentically.</p>
        <p style={{fontFamily:'Manrope',fontSize:16,color:TX,lineHeight:1.85,marginBottom:20}}>That's the right answer. But it's incomplete.</p>
        <p style={{fontFamily:'Manrope',fontSize:16,color:TX,lineHeight:1.85,marginBottom:48}}>There's a third asset that sits between creative execution and cultural intelligence — and almost nobody is building it. It's the governance layer: the infrastructure that determines what an agency can actually do with AI-generated culture, synthetic media, and creator partnerships without exposing its clients to legal, reputational, and regulatory risk they haven't accounted for.</p>

        <div style={{borderTop:`1px solid ${BD}`,margin:'48px 0'}}/>

        {/* Section 1 */}
        <div style={{marginBottom:56}}>
          <div style={{fontFamily:'Syne',fontSize:10,fontWeight:600,letterSpacing:'0.15em',textTransform:'uppercase',color:G,marginBottom:8}}>01 &nbsp;/&nbsp; What the third asset is</div>
          <h2 style={{fontFamily:'Syne',fontSize:18,fontWeight:600,color:TX,marginBottom:20}}>The infrastructure sitting between creative output and client exposure</h2>
          <p style={{fontFamily:'Manrope',fontSize:16,color:TX,lineHeight:1.85,marginBottom:16}}>The third asset isn't legal compliance. It's not a checklist. It's the operational and analytical infrastructure that lets an agency answer questions that clients will start asking within the next twelve months — questions that nobody on a creative or strategy team is currently equipped to answer.</p>
          <p style={{fontFamily:'Manrope',fontSize:16,color:TX,lineHeight:1.85,marginBottom:16}}>Those questions look like this: When we activate an AI-generated creator for this campaign, who owns the likeness and what are we liable for? When our influencer partner starts using AI-generated content in their posts, does our campaign agreement cover that? When we use AI-generated music in a brand film, what's the actual licensing exposure? When a regulator starts looking at AI disclosure in advertising, are our client contracts written for that world?</p>
          <p style={{fontFamily:'Manrope',fontSize:16,color:TX,lineHeight:1.85}}>The third asset is the combination of regulatory monitoring, behavioral trust science, and governance protocol that lets an agency answer those questions before they become crises. It sits at the intersection of law, neuroscience, and technology — which is why almost nobody has built it yet.</p>
        </div>

        <div style={{borderTop:`1px solid ${BD}`,margin:'48px 0'}}/>

        {/* Section 2 */}
        <div style={{marginBottom:56}}>
          <div style={{fontFamily:'Syne',fontSize:10,fontWeight:600,letterSpacing:'0.15em',textTransform:'uppercase',color:G,marginBottom:8}}>02 &nbsp;/&nbsp; Where agencies are exposed right now</div>
          <h2 style={{fontFamily:'Syne',fontSize:18,fontWeight:600,color:TX,marginBottom:20}}>Four scenarios playing out across the industry</h2>
          <p style={{fontFamily:'Manrope',fontSize:16,color:TX,lineHeight:1.85,marginBottom:28}}>These aren't hypotheticals. Each of the following is a live exposure for any agency doing AI-adjacent creative work today.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:24}}>
            {[
              {n:'01',title:'AI-generated creator, no likeness framework',body:'A brand activates a synthetic influencer. No governing agreement exists for AI-generated likeness use. When the campaign goes wider than expected, there\'s no legal architecture to defend what was done or constrain what comes next.'},
              {n:'02',title:'AI music in a culture moment, no clearance',body:'A campaign uses AI-generated music that samples or mimics a known artist\'s style. The moment the brand gets cultural traction, the licensing exposure surfaces. The agency has no protocol for what "clearance" means in an AI-generated context.'},
              {n:'03',title:'Influencer shifts to AI content, no protocol',body:'A client\'s long-term influencer partner starts mixing AI-generated content into their posts. The agency has no disclosure framework, no authenticity standard written into the contract, and no monitoring to catch the shift before the client does.'},
              {n:'04',title:'AI-generated music licensing exposure at scale',body:'As AI music generation matures, the line between "inspired by" and "derivative of" is legally unclear. An agency placing AI-generated music across multiple client campaigns has aggregated licensing risk nobody has mapped or priced.'}
            ].map(s=>(<div key={s.n} style={{background:'white',border:`1px solid ${BD}`,borderRadius:6,padding:'20px 22px'}}>
              <div style={{fontFamily:'Syne',fontSize:10,fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',color:AM,marginBottom:8}}>Scenario {s.n}</div>
              <div style={{fontFamily:'Syne',fontSize:14,fontWeight:600,color:TX,marginBottom:10,lineHeight:1.4}}>{s.title}</div>
              <p style={{fontSize:13,color:MU,lineHeight:1.65,margin:0}}>{s.body}</p>
            </div>))}
          </div>
          <p style={{fontFamily:'Manrope',fontSize:16,color:TX,lineHeight:1.85}}>The pattern across all four is the same. The creative work moved fast. The governance infrastructure didn't exist yet. When the exposure surfaced, the agency had no framework to stand behind.</p>
        </div>

        <div style={{borderTop:`1px solid ${BD}`,margin:'48px 0'}}/>

        {/* Section 3 */}
        <div style={{marginBottom:56}}>
          <div style={{fontFamily:'Syne',fontSize:10,fontWeight:600,letterSpacing:'0.15em',textTransform:'uppercase',color:G,marginBottom:8}}>03 &nbsp;/&nbsp; What the infrastructure looks like</div>
          <h2 style={{fontFamily:'Syne',fontSize:18,fontWeight:600,color:TX,marginBottom:20}}>When an agency actually has this layer</h2>
          {[
            {title:'Regulatory monitoring',body:'Live tracking of FTC guidance, Congressional AI disclosure bills, state AG enforcement patterns, and international synthetic media regulation — delivered as actionable intelligence, not raw legal text. An agency with this layer knows what\'s coming before clients ask.'},
            {title:'Creator rights framework',body:'A reusable governance protocol that runs every influencer and creator partnership through a structured assessment before activation. Covers AI content disclosure, likeness rights, platform-specific compliance, and contract language that holds in an AI-generated content environment.'},
            {title:'Behavioral trust science',body:'The neuroscience of why audiences detect synthetic inauthenticity — and what that means for campaign design. This isn\'t intuition. It\'s a research-backed framework for understanding where AI-generated content breaks consumer trust at the neurological level, and how to design around it.'},
            {title:'Culture intelligence monitoring',body:'Real-time signal tracking across the screen culture → consumer behavior pipeline — with a governance risk flag on every signal involving AI-generated content, synthetic media, or creator rights exposure. The column nobody else\'s dashboard has.'}
          ].map((item,i)=>(<div key={i} style={{display:'flex',gap:12,marginBottom:20,alignItems:'flex-start'}}>
            <div style={{width:32,height:32,borderRadius:6,background:GL,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:2}}>
              <div style={{width:10,height:10,borderRadius:'50%',background:G}}/>
            </div>
            <div>
              <div style={{fontFamily:'Syne',fontSize:14,fontWeight:600,color:TX,marginBottom:4}}>{item.title}</div>
              <p style={{fontSize:14,color:MU,lineHeight:1.65,margin:0}}>{item.body}</p>
            </div>
          </div>))}
        </div>

        {/* Project suite */}
        <div style={{background:G,borderRadius:8,padding:'36px 40px',marginTop:48}}>
          <div style={{fontFamily:'Syne',fontSize:10,fontWeight:600,letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(255,255,255,.6)',marginBottom:16}}>Four projects &nbsp;·&nbsp; Built and deployed</div>
          <h2 style={{fontFamily:'Cormorant Garamond',fontSize:26,fontWeight:500,color:'white',marginBottom:16}}>The suite I've built for this layer</h2>
          <p style={{fontSize:15,color:'rgba(255,255,255,.85)',lineHeight:1.7,marginBottom:28}}>Each of the four components of this infrastructure layer is built, deployed, and accessible now. Not a deck about what it could look like — working tools.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            {[
              {n:'01',name:'Culture Governance Audit',desc:'Interactive tool. Input a client or campaign type, receive a structured AI/synthetic media exposure assessment cross-referenced against live FTC enforcement data.',url:'https://aloha-governance-audit.vercel.app'},
              {n:'02',name:'Behavioral Intelligence Layer',desc:'Monthly intelligence product. Why specific culture moments drive consumer behavior — with the science, the signal, and the brand action. White-labelable for clients.',url:'https://aloha-behavioral-intelligence.vercel.app'},
              {n:'03',name:'Creator Rights Framework',desc:'Decision-tree protocol. Every question an agency needs to answer before activating any AI-adjacent creator partnership. Built as a working tool with live regulatory data.',url:'https://aloha-creator-rights.vercel.app'},
              {n:'04',name:'Culture Intelligence Monitor',desc:'Live dashboard. Screen culture → consumer behavior signals updated daily, with a Governance Risk flag column on every AI-adjacent trend.',url:'https://aloha-culture-monitor.vercel.app'}
            ].map(p=>(<a key={p.n} href={p.url} target="_blank" rel="noreferrer" style={{display:'block',background:'rgba(255,255,255,.12)',border:'1px solid rgba(255,255,255,.2)',borderRadius:6,padding:'16px 18px',textDecoration:'none'}}>
              <div style={{fontFamily:'Syne',fontSize:10,fontWeight:600,letterSpacing:'0.1em',color:'rgba(255,255,255,.5)',marginBottom:6}}>Project {p.n} →</div>
              <div style={{fontFamily:'Syne',fontSize:13,fontWeight:600,color:'white',marginBottom:4,lineHeight:1.35}}>{p.name}</div>
              <div style={{fontSize:12,color:'rgba(255,255,255,.65)',lineHeight:1.55}}>{p.desc}</div>
            </a>))}
          </div>
        </div>

        {/* Footer byline */}
        <div style={{marginTop:48,paddingTop:32,borderTop:`1px solid ${BD}`,fontSize:13,color:MU}}>
          <strong style={{color:TX,fontSize:14}}>RN Collins</strong><br/>
          Neuroscientist &nbsp;·&nbsp; JD Candidate, Northeastern University School of Law &nbsp;·&nbsp; AI Governance Researcher, Brown University AISLE Project<br/>
          AI Workflow Developer, Croke Fairchild Duarte &amp; Beres &nbsp;·&nbsp; Founder, Aloha AI Consulting<br/>
          <a href="mailto:collins.ra@northeastern.edu" style={{color:G}}>collins.ra@northeastern.edu</a> &nbsp;·&nbsp; <a href="https://linkedin.com/in/rn-collins" style={{color:G}}>linkedin.com/in/rn-collins</a>
        </div>
      </main>

      <footer style={{background:TX,padding:'24px 48px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:24,flexWrap:'wrap'}}>
        <div><div style={{fontFamily:'Syne',fontSize:13,fontWeight:600,color:'white'}}>RN Collins · Aloha AI Consulting</div></div>
        <div style={{display:'flex',alignItems:'center',gap:20}}>
          <a href="https://linkedin.com/in/rn-collins" target="_blank" rel="noreferrer" style={{fontSize:13,color:'rgba(255,255,255,.6)'}}>LinkedIn</a>
          <button onClick={()=>setContactOpen(true)} style={{fontFamily:'Syne',fontSize:12,fontWeight:600,padding:'8px 18px',background:'rgba(255,255,255,.12)',border:'1px solid rgba(255,255,255,.25)',borderRadius:6,color:'white',cursor:'pointer'}}>Contact the Architect</button>
        </div>
      </footer>
    </div>
  </>)
}

function ContactModal({isOpen,onClose}){
  const [form,setForm]=useState({name:'',email:'',inquiry:'',message:''})
  const [st,setSt]=useState(null)
  if(!isOpen)return null
  const submit=async(e)=>{e.preventDefault();setSt('sending');try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});if(!r.ok)throw new Error();setSt('success')}catch{setSt('error')}}
  return(<><div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',zIndex:200,backdropFilter:'blur(2px)'}}/>
    <div style={{position:'fixed',bottom:0,left:0,right:0,background:'white',borderRadius:'16px 16px 0 0',padding:'36px 40px 48px',zIndex:201,maxWidth:560,margin:'0 auto',boxShadow:'0 -8px 40px rgba(0,0,0,0.15)'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24}}><div><div style={{fontFamily:'Syne',fontSize:20,fontWeight:700,color:TX}}>Contact the Architect</div><div style={{fontSize:13,color:MU,marginTop:4}}>RN Collins · Aloha AI Consulting</div><div style={{fontFamily:'monospace',fontSize:11,color:MU,marginTop:3}}>collins.ra@northeastern.edu</div></div><button onClick={onClose} style={{background:'none',border:'none',fontSize:20,cursor:'pointer',color:MU}}>✕</button></div>
      {st==='success'?(<div style={{textAlign:'center',padding:'32px 0'}}><div style={{fontSize:32,marginBottom:12}}>✓</div><div style={{fontFamily:'Syne',fontSize:16,fontWeight:600,color:TX,marginBottom:8}}>Message received</div><div style={{fontSize:14,color:MU}}>I'll be in touch within 48 hours.</div><button onClick={onClose} style={{marginTop:24,padding:'10px 24px',background:G,border:'none',borderRadius:6,fontFamily:'Syne',fontSize:13,fontWeight:600,color:'white',cursor:'pointer'}}>Close</button></div>):
      (<form onSubmit={submit}>
        {[{k:'name',l:'Name',t:'text',p:'Your name'},{k:'email',l:'Email',t:'email',p:'your@email.com'}].map(f=>(<div key={f.k} style={{marginBottom:16}}><label style={{display:'block',fontFamily:'Syne',fontSize:11,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:MU,marginBottom:6}}>{f.l}</label><input type={f.t} required placeholder={f.p} value={form[f.k]} onChange={e=>setForm(p=>({...p,[f.k]:e.target.value}))} style={{width:'100%',padding:'10px 14px',border:`1px solid ${BD}`,borderRadius:6,fontFamily:'Manrope',fontSize:14,color:TX,background:BG,outline:'none'}}/></div>))}
        <div style={{marginBottom:16}}><label style={{display:'block',fontFamily:'Syne',fontSize:11,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:MU,marginBottom:6}}>Inquiry type</label><select required value={form.inquiry} onChange={e=>setForm(p=>({...p,inquiry:e.target.value}))} style={{width:'100%',padding:'10px 14px',border:`1px solid ${BD}`,borderRadius:6,fontFamily:'Manrope',fontSize:14,color:TX,background:BG,appearance:'none',outline:'none'}}><option value="">Select...</option>{['Build a tool','Consulting','Speaking','Other'].map(o=><option key={o}>{o}</option>)}</select></div>
        <div style={{marginBottom:24}}><label style={{display:'block',fontFamily:'Syne',fontSize:11,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:MU,marginBottom:6}}>Message</label><textarea required rows={4} placeholder="What are you working on?" value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} style={{width:'100%',padding:'10px 14px',border:`1px solid ${BD}`,borderRadius:6,fontFamily:'Manrope',fontSize:14,color:TX,background:BG,outline:'none',resize:'vertical'}}/></div>
        {st==='error'&&<div style={{fontSize:13,color:'#A32D2D',marginBottom:16}}>Something went wrong.</div>}
        <button type="submit" disabled={st==='sending'} style={{width:'100%',padding:14,background:st==='sending'?'#9BBFBA':G,border:'none',borderRadius:8,fontFamily:'Syne',fontSize:15,fontWeight:600,color:'white',cursor:st==='sending'?'not-allowed':'pointer'}}>{st==='sending'?'Sending...':'Send message'}</button>
      </form>)}
    </div></>)
}

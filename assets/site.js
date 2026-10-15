/* 전민 연구 기록: 모든 페이지의 공통 부품. assets/catalog.js 다음에 불러온다.
   규칙과 쓰는 법은 DESIGN.md("새 글 쓰는 법").

   자동으로 하는 일
   1) 상단 바: <header class="top" data-root="../"></header>를 채운다(브랜드, 메뉴, 테마 버튼, 글 진행 막대).
   2) 테마: localStorage "jm:theme"(light|dark). 바뀌면 document에 "themechange" 이벤트를 보낸다.
   3) 해설 글(posts/<slug>.html): 주소의 slug로 CATALOG.PAPERS에서 논문을 찾아
      .hero 바로 뒤에 '이런 상황이라면?'(.scene)과 결론(.concl)을, <main> 안 <footer> 바로 앞에 연결(.connect)을 넣는다.
   4) 용어 풀이: <span class="term" data-tip="설명">용어</span>
   5) 인용 복사: <button class="btn" data-copy="#citeText">복사</button>
   6) 눈금 점 말풍선: .gauge .pt[data-label]

   글이 직접 부르는 함수: window.SITE = {esc, store, gauge, scene, concl, connect, quiz, seg, roleKo, href, phaseShort, topicShort, paper}
*/
(function(){
'use strict';
const C=window.CATALOG||{PAPERS:[],QUESTIONS:[],PHASES:[],TOPICS:[],POSTS:[]};
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const store={
  get(k,d){try{const v=localStorage.getItem('jm:'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},
  set(k,v){try{localStorage.setItem('jm:'+k,JSON.stringify(v))}catch(e){}}
};
const header=document.querySelector('header.top');
const ROOT=(header&&header.dataset.root)||'';
/* 홈의 섹션으로 가는 주소 앞부분: 홈에서는 '', 다른 페이지에서는 '../' 또는 './' */
const HOME=document.getElementById('sheet')?'':(ROOT||'./');

/* ---------- 이름표 ---------- */
const ROLE_KO={'first':'제1저자','co-first':'공동 제1저자','corresponding':'교신저자','co-corresponding':'공동 교신저자','co-author':'공저자'};
const roleKo=r=>ROLE_KO[r]||'';
const phaseShort={P1:'조기 정신증, 신체건강, 중독',P2:'코로나 사회정신의학, 정신종양',P3:'MAKE BETTER 우울증 코호트와 혈청 지표',P4:'디지털 신호와 AI, LLM 우울 선별',P_parallel:'병행 줄기: 조기개입, 자살 정책, 신체질환과 노년'};
const topicShort={T1:'조기 정신증과 신체건강',T2:'코로나19 사회정신의학',T3:'자살, 중독, 정신보건 정책',T4:'MAKE BETTER 코호트와 혈청 지표',T5:'디지털 표현형과 AI 우울 탐지',T6:'조현병 언어 분석',T7:'신체질환, 외상, 노년의 정신건강'};
const byId=Object.fromEntries(C.PAPERS.map(p=>[p.id,p]));
const Q=Object.fromEntries(C.QUESTIONS.map(q=>[q.id,q]));
const PH=Object.fromEntries(C.PHASES.map(p=>[p.id,p]));
const TP=Object.fromEntries(C.TOPICS.map(t=>[t.id,t]));
/* 논문으로 가는 주소: 해설 글 > 공통 논문 페이지 > DOI > 없음 */
function href(p,root=ROOT){
  if(p.tier==='A'&&p.slug) return root+'posts/'+p.slug+'.html';
  if(p.tier==='A'||p.tier==='B') return root+'paper.html?id='+encodeURIComponent(p.id);
  if(p.doi) return 'https://doi.org/'+p.doi;
  return null;
}
const titleOf=p=>p.title_ko||p.title||'';
/* 데이터 문장의 줄표와 단어 사이 가운뎃점을 쉼표로 바꿔 화면용으로 다듬는다 */
const tidy=s=>String(s==null?'':s).replace(/\s*—\s*/g,', ').replace(/([^\s\d])·(?=[^\s\d])/g,'$1, ');

/* ---------- 1) 상단 바 ---------- */
const NAV=[['기록지','#sheet'],['시기','#phases'],['질문','#questions'],['논문','#papers']];
if(header&&!header.children.length){
  header.innerHTML=`<div class="wrap"><a class="brand" href="${ROOT||'./'}">전민 연구 기록</a>
  <div class="top-right"><nav class="site-nav" aria-label="사이트">${NAV.map(([t,h],i)=>`<a href="${HOME}${h}"${i===1?' class="opt-nav"':''}>${t}</a>`).join('')}</nav>
  <button class="theme-btn" type="button" aria-label="밝게 또는 어둡게 보기"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 1.5a6.5 6.5 0 0 1 0 13z" fill="currentColor"/></svg></button></div></div>
  ${document.querySelector('main.post')?'<div class="progress" aria-hidden="true"></div>':''}`;
}

/* ---------- 2) 테마 ---------- */
const root=document.documentElement;
const saved=store.get('theme',null); if(saved) root.dataset.theme=saved;
const isDark=()=>root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
document.addEventListener('click',e=>{
  if(!e.target.closest||!e.target.closest('.theme-btn'))return;
  const t=isDark()?'light':'dark'; root.dataset.theme=t; store.set('theme',t);
  document.dispatchEvent(new Event('themechange'));
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{if(!root.dataset.theme)document.dispatchEvent(new Event('themechange'))});
const bar=document.querySelector('header.top .progress');
if(bar) addEventListener('scroll',()=>{const h=root;bar.style.width=Math.min(100,h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});

/* ---------- 4), 6) 말풍선: 용어(.term)와 눈금 점(.gauge .pt) 공용 ---------- */
const tip=document.createElement('div');tip.className='tip';tip.setAttribute('role','tooltip');document.body.appendChild(tip);
let tipFor=null;
function showTip(el){
  const t=el.dataset.tip||el.dataset.label; if(!t)return;
  tip.textContent=t; tip.classList.add('show'); tipFor=el;
  const r=el.getBoundingClientRect(),w=tip.offsetWidth,h=tip.offsetHeight;
  tip.style.left=Math.min(Math.max(8,r.left+r.width/2-w/2),innerWidth-w-8)+'px';
  tip.style.top=(r.bottom+8+h>innerHeight?r.top-h-8:r.bottom+8)+'px';
}
function hideTip(){tip.classList.remove('show');tipFor=null}
const tipTarget=e=>e.target.closest&&e.target.closest('.term,.gauge .pt');
document.querySelectorAll('.term').forEach(el=>{if(!el.hasAttribute('tabindex'))el.tabIndex=0});
document.addEventListener('mouseover',e=>{const t=tipTarget(e);if(t)showTip(t)});
document.addEventListener('mouseout',e=>{if(tipTarget(e))hideTip()});
document.addEventListener('focusin',e=>{const t=tipTarget(e);if(t)showTip(t)});
document.addEventListener('focusout',e=>{if(tipTarget(e))hideTip()});
document.addEventListener('click',e=>{const t=tipTarget(e);if(t){tipFor===t?hideTip():showTip(t)}else hideTip()});
addEventListener('scroll',hideTip,{passive:true});

/* ---------- 5) 인용 복사 ---------- */
document.addEventListener('click',async e=>{
  const b=e.target.closest&&e.target.closest('[data-copy]'); if(!b)return;
  const src=document.querySelector(b.dataset.copy); if(!src)return;
  const old=b.textContent;
  try{await navigator.clipboard.writeText(src.textContent.trim());b.textContent='복사했습니다'}catch(err){b.textContent='복사하지 못했습니다'}
  setTimeout(()=>b.textContent=old,1600);
});

/* ---------- 측정값 눈금 ----------
   g = {min, max, ticks:[…], pts:[{v, label, ref?}], band?:[lo,hi], ci?:[lo,hi]}
   빨간 점 = 이 연구의 측정값, 속 빈 점(ref:1) = 비교 기준. 점에 손가락을 대면 label이 뜬다. */
function gauge(g,label){
  if(!g||g.max===g.min)return '';
  const span=g.max-g.min,x=v=>(Math.max(0,Math.min(1,(v-g.min)/span))*100).toFixed(2)+'%';
  return `<div class="gauge" role="img" aria-label="${esc(label||'')}"><div class="axis"></div>
  ${g.band?`<div class="band" style="left:${x(g.band[0])};width:calc(${x(g.band[1])} - ${x(g.band[0])})"></div>`:''}
  ${(g.ticks||[]).map(t=>`<div class="tick" style="left:${x(t)}"><span>${esc(t)}</span></div>`).join('')}
  ${g.ci?`<div class="ci" style="left:${x(g.ci[0])};width:calc(${x(g.ci[1])} - ${x(g.ci[0])})"></div>`:''}
  ${(g.pts||[]).map(p=>`<div class="pt${p.ref?' ref':''}" style="left:${x(p.v)}" tabindex="0" data-label="${esc(p.label)}"></div>`).join('')}</div>`;
}

/* ---------- 이런 상황이라면? ----------
   정답을 맞히는 퀴즈가 아니다. 연구가 출발한 장면을 독자가 먼저 겪어 보게 하고,
   하나를 고르면 이 연구가 왜 필요했는지(need.why)를 펼친다. 고른 것은 이 브라우저에만 기억한다. */
function scene(p,host,{more='',label='이런 상황이라면?'}={}){
  const n=p&&p.need; if(!n){host.remove();return null}
  host.classList.add('scene','panel');
  const key='scene:'+(p.slug||p.id);
  const draw=()=>{
    const pick=store.get(key,null);
    host.innerHTML=`<span class="cx"></span><p class="s-label">${esc(label)}</p>
    <p class="s-scene">${esc(n.scene)}</p>
    <p class="s-ask">${esc(n.ask)}</p>
    <div class="s-opts" role="group" aria-label="선택지">${n.opts.map((o,i)=>`<button type="button" class="s-opt" data-i="${i}" aria-pressed="${pick===i}">${esc(o)}</button>`).join('')}</div>
    ${pick!=null?`<div class="s-why" aria-live="polite"><p>${esc(n.why)}</p>${more?`<p class="s-more">${more}</p>`:''}</div>`:'<p class="s-hint">어느 쪽이든 고르면 이 연구가 왜 필요했는지 펼쳐집니다. 정답은 없습니다.</p>'}`;
    host.querySelectorAll('.s-opt').forEach(b=>b.onclick=()=>{store.set(key,+b.dataset.i);draw();const f=host.querySelector(`.s-opt[data-i="${b.dataset.i}"]`);if(f)f.focus()});
  };
  draw(); return host;
}

/* ---------- 결론 블록 ---------- */
function roleLine(p){
  const r=roleKo(p.role);
  const where=[p.venue,p.year].filter(Boolean).join(', ');
  return (where?esc(where)+'. ':'')+(r?`이 논문에서 저는 ${esc(r)}입니다.`:'');
}
function concl(p,{root=ROOT}={}){
  const text=p.concl||p.conclusion_ko; if(!text)return null;
  const qid=p.q||(p.questions||[])[0], q=qid&&Q[qid];
  const el=document.createElement('section');el.className='concl';el.setAttribute('aria-label','이 연구의 결론');
  el.innerHTML=`<p class="c-label">이 연구의 결론</p><div>
  <p class="c-text">${esc(text)}</p>
  <p class="c-q">${q?`이 연구가 답하려 한 질문: <a href="${HOME}#q=${q.id}">${esc(tidy(q.q))}</a>`:''}
  <span class="c-role">${roleLine(p)}</span></p></div>`;
  return el;
}

/* ---------- 연결: 같은 질문, 같은 시기, 같은 주제 ---------- */
function rank(a,b){
  const s=p=>(p.tier==='A'&&p.slug?0:p.tier==='A'?1:p.tier==='B'?2:3);
  return s(a)-s(b)||(b.led-a.led)||((b.year||0)-(a.year||0));
}
function list(p,ids,root){
  const items=ids.map(i=>byId[i]).filter(x=>x&&x.id!==p.id).sort(rank);
  if(!items.length)return {html:'<p class="cn-empty">이 묶음의 다른 논문은 아직 없습니다.</p>',n:0};
  return {n:items.length,html:'<ul>'+items.slice(0,5).map(x=>{const h=href(x,root);
    return `<li><span class="y">${x.year||''}</span>${h?`<a href="${esc(h)}"${h.startsWith('http')?' target="_blank" rel="noopener"':''}>${esc(titleOf(x))}</a>`:esc(titleOf(x))}${x.led?'<span class="led">전민 주도</span>':''}</li>`}).join('')+'</ul>'};
}
function connect(p,{root=ROOT}={}){
  const cols=[];
  const qid=p.q||(p.questions||[])[0];
  if(qid&&Q[qid]){const q=Q[qid],l=list(p,q.ids,root);
    cols.push(`<div><h3>같은 질문</h3><p class="cn-sub">${esc(tidy(q.q))}</p>${l.html}<p class="cn-more"><a href="${HOME}#q=${q.id}">이 질문의 논문 모두 보기</a></p></div>`)}
  if(p.phase&&PH[p.phase]){const ph=PH[p.phase],l=list(p,ph.ids,root);
    cols.push(`<div><h3>같은 시기</h3><p class="cn-sub">${esc(String(ph.years).replace(/-/g,'–'))}, ${esc(phaseShort[ph.id]||ph.label_ko)}</p>${l.html}<p class="cn-more"><a href="${HOME}#p=${ph.id}">이 시기의 논문 모두 보기</a></p></div>`)}
  const tid=(p.topics||[])[0];
  if(tid&&TP[tid]){const t=TP[tid],l=list(p,t.ids,root);
    cols.push(`<div><h3>같은 주제</h3><p class="cn-sub">${esc(tidy(t.name_ko))}</p>${l.html}<p class="cn-more"><a href="${HOME}#t=${t.id}">이 주제의 논문 모두 보기</a></p></div>`)}
  if(!cols.length)return null;
  const el=document.createElement('section');el.className='connect';el.setAttribute('aria-labelledby','connect-h');
  el.innerHTML=`<div class="sec-head"><h2 id="connect-h">이 연구가 이어지는 곳</h2><p>같은 질문, 같은 시기, 같은 주제로 묶인 다른 논문입니다.</p></div>
  <div class="panel cn" style="--n:${cols.length}"><span class="cx"></span>${cols.join('')}</div>`;
  return el;
}

/* ---------- 퀴즈 ----------
   items=[{q:'질문', o:['보기1','보기2','보기3'], a:정답 번호(0부터), e:'해설'}]
   SITE.quiz(document.getElementById('quizBox'), items, '<slug>') */
function quiz(host,items,key){
  const k='quiz:'+key; let st=store.get(k,{});
  host.classList.add('quiz','panel');
  const draw=()=>{let score=0,done=0;
    host.innerHTML='<span class="cx"></span>'+items.map((z,i)=>{const s=st[i];if(s!=null){done++;if(s===z.a)score++}
      return `<div class="q"><p>${i+1}. ${esc(z.q)}</p><div class="opts">${z.o.map((o,j)=>`<button type="button" class="opt${s!=null&&j===z.a?' right':''}${s===j&&j!==z.a?' wrong':''}" data-i="${i}" data-j="${j}"${s!=null?' disabled':''}>${esc(o)}</button>`).join('')}</div>${s!=null?`<p class="explain">${s===z.a?'맞습니다.':'정답은 '+esc(z.o[z.a])+'입니다.'} ${esc(z.e)}</p>`:''}</div>`}).join('')
      +`<div class="q-foot"><b>${score} / ${items.length}${done===items.length?' 맞힘':''}</b><button type="button" class="btn" data-reset>다시 풀기</button></div>`;
    host.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{st[b.dataset.i]=+b.dataset.j;store.set(k,st);draw()});
    host.querySelector('[data-reset]').onclick=()=>{st={};store.set(k,st);draw()};
  };
  draw();
}

/* ---------- 선택 버튼 묶음 ----------
   <div class="seg" id="x"><button data-k="a">…</button>…</div>
   SITE.seg('x', k=>{…}, '<slug>:x')  고른 값은 기억한다. */
function seg(id,cb,key){
  const box=typeof id==='string'?document.getElementById(id):id; if(!box)return;
  const btns=[...box.querySelectorAll('button')];
  const pick=b=>{btns.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));if(key)store.set('seg:'+key,b.dataset.k);cb(b.dataset.k)};
  btns.forEach(b=>{b.type='button';b.onclick=()=>pick(b)});
  const k0=key&&store.get('seg:'+key,null);pick(btns.find(x=>x.dataset.k===k0)||btns[0]);
}

window.SITE={esc,tidy,store,gauge,scene,concl,connect,quiz,seg,roleKo,href,phaseShort,topicShort,paper:id=>byId[id],root:ROOT};

/* ---------- 7) 논문 id로 거는 링크: <a data-paper="actigraphy_steps_jad_2025"></a>
   해설 글이 생기면 글로, 아니면 요약 페이지나 DOI로 저절로 이어진다. 글자가 비어 있으면 논문 제목을 넣는다. */
document.querySelectorAll('a[data-paper]').forEach(a=>{
  const x=byId[a.dataset.paper]; if(!x)return;
  const h=href(x); if(h){a.href=h;if(h.startsWith('http')){a.target='_blank';a.rel='noopener'}}
  if(!a.textContent.trim())a.textContent=titleOf(x);
});

/* ---------- 3) 해설 글 자동 부품 ---------- */
const m=location.pathname.match(/posts\/([a-z0-9-]+)\.html$/);
const p=m&&C.PAPERS.find(x=>x.slug===m[1]);
if(!p)return;
const hero=document.querySelector('main .hero');
if(hero){
  const c=concl(p); if(c)hero.after(c);
  if(p.need){const sc=document.createElement('section');sc.setAttribute('aria-label','이런 상황이라면');hero.after(sc);scene(p,sc)}
}
const foot=document.querySelector('main footer');
const cn=connect(p); if(cn){foot?foot.before(cn):document.querySelector('main').append(cn)}
})();

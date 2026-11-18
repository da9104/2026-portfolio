// Daily commit strip restored from portfolio-original.html; original dates and counts preserved.
(() => {
 const days = {"2026-11-06": 68, "2026-10-26": 129, "2026-11-05": 75, "2026-10-29": 25, "2026-08-29": 35, "2026-11-09": 138, "2026-06-30": 28, "2026-08-26": 48, "2026-10-28": 94, "2026-09-15": 17, "2026-11-12": 152, "2026-11-10": 83, "2026-08-31": 83, "2026-08-21": 24, "2026-10-27": 103, "2026-07-28": 16, "2026-08-24": 29, "2026-08-28": 32, "2026-06-26": 11, "2026-11-08": 52, "2026-10-14": 3, "2026-07-13": 5, "2026-10-30": 27, "2026-10-31": 15, "2026-07-07": 18, "2026-09-01": 20, "2026-09-20": 20, "2026-09-06": 34, "2026-08-06": 22, "2026-08-05": 8, "2026-09-16": 10, "2026-10-19": 5, "2026-07-24": 7, "2026-07-11": 42, "2026-08-23": 39, "2026-11-02": 72, "2026-07-25": 9, "2026-07-29": 13, "2026-10-25": 48, "2026-08-10": 18, "2026-11-03": 33, "2026-10-21": 4, "2026-08-02": 28, "2026-08-11": 19, "2026-09-23": 44, "2026-11-13": 33, "2026-11-11": 77, "2026-09-13": 27, "2026-07-02": 22, "2026-07-15": 26, "2026-07-05": 7, "2026-08-19": 22, "2026-09-03": 24, "2026-08-27": 38, "2026-06-21": 36, "2026-08-12": 21, "2026-08-07": 15, "2026-09-08": 5, "2026-07-06": 9, "2026-08-22": 8, "2026-07-27": 7, "2026-09-24": 8, "2026-07-03": 33, "2026-08-25": 25, "2026-09-05": 20, "2026-06-20": 12, "2026-07-31": 11, "2026-08-30": 9, "2026-10-20": 7, "2026-09-26": 4, "2026-09-04": 26, "2026-07-21": 4, "2026-09-17": 11, "2026-11-01": 64, "2026-09-02": 47, "2026-09-14": 21, "2026-11-07": 32, "2026-07-23": 6, "2026-09-11": 10, "2026-11-14": 11, "2026-07-30": 26, "2026-07-12": 9, "2026-10-13": 2, "2026-09-22": 14, "2026-08-18": 8, "2026-06-04": 2, "2026-08-04": 17, "2026-09-21": 11, "2026-09-09": 11, "2026-09-12": 7, "2026-11-04": 8, "2026-06-18": 3, "2026-10-07": 2, "2026-09-19": 5, "2026-06-25": 5, "2026-10-01": 7, "2026-08-20": 6, "2026-09-18": 10, "2026-10-22": 3, "2026-07-10": 1, "2026-07-09": 3, "2026-10-24": 14, "2026-06-22": 7, "2026-07-22": 3, "2026-06-28": 9, "2026-09-29": 2, "2026-09-30": 6, "2026-08-03": 4, "2026-07-16": 4, "2026-10-16": 10, "2026-09-07": 7, "2026-07-26": 17, "2026-06-09": 1, "2026-06-14": 7, "2026-07-14": 10, "2026-06-06": 2, "2026-07-01": 1, "2026-06-19": 1, "2026-08-13": 3, "2026-06-17": 1, "2026-06-23": 3, "2026-10-23": 1, "2026-10-15": 1, "2026-07-04": 1, "2026-06-03": 2, "2026-06-29": 1, "2026-09-28": 1, "2026-07-08": 1, "2026-09-25": 1};
 const svg=document.getElementById('strip'),tip=document.getElementById('tip'),NS='http://www.w3.org/2000/svg';
 let selected=null;
 const label=(key,count)=>{
  const date=new Date(key+'T00:00:00Z');
  return window.PortfolioI18n.locale==='ko'?`${date.getUTCMonth()+1}월 ${date.getUTCDate()}일 · 커밋 ${count}개`:`${date.getUTCDate()} ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][date.getUTCMonth()]} · ${count} commit${count===1?'':'s'}`;
 };
 function render(){
  svg.replaceChildren();
  const W=1000,H=250,L=38,R=8,T=14,B=28,ph=H-T-B;
  const start=new Date('2026-06-01T00:00:00Z'),end=new Date('2026-11-14T00:00:00Z');
  const n=Math.round((end-start)/864e5)+1,step=(W-L-R)/n,max=160;
  const el=(t,a,txt,parent=svg)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);if(txt!=null)e.textContent=txt;parent.appendChild(e);return e;};
  [0,40,80,120,160].forEach(v=>{const y=T+ph-(v/max)*ph;el('line',{x1:L,x2:W-R,y1:y,y2:y,stroke:'var(--line)','stroke-width':1});el('text',{x:L-8,y:y+4,'text-anchor':'end'},v);});
  const mon=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  for(let i=0;i<n;i++){
   const date=new Date(+start+i*864e5),key=date.toISOString().slice(0,10),count=days[key]||0,x=L+i*step;
   if(date.getUTCDate()===1){el('line',{x1:x,x2:x,y1:T+ph,y2:T+ph+5,stroke:'var(--muted)','stroke-width':1});el('text',{x:x+3,y:H-8},window.PortfolioI18n.locale==='ko'?`${date.getUTCMonth()+1}월`:mon[date.getUTCMonth()]);}
   if(!count)continue;
   const h=Math.max(1.5,(count/max)*ph),r=el('rect',{x:x+.6,y:T+ph-h,width:Math.max(1,step-1.2),height:h,fill:count===152?'var(--peak)':'var(--accent)',tabindex:0,role:'button','aria-label':label(key,count),'data-date':key,'data-count':count});
   el('title',{},label(key,count),r);
   const show=()=>{selected=key;tip.textContent=label(key,count);};
   r.addEventListener('mouseenter',show);r.addEventListener('focus',show);r.addEventListener('click',show);
   r.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show();}if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const bars=[...svg.querySelectorAll('rect')],index=bars.indexOf(r),next=bars[index+(e.key==='ArrowRight'?1:-1)];next?.focus();}});
  }
  tip.textContent=selected?label(selected,days[selected]):window.PortfolioI18n.t("Hover or tap a bar for the day's count.");
 }
 document.addEventListener('portfolio:language',render);render();
})();

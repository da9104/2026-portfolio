const i18n=window.PortfolioI18n;
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const updateNav = () => nav.classList.toggle('scrolled', window.scrollY > 50);
window.addEventListener('scroll', updateNav, {passive:true}); updateNav();
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',i18n.t('Open navigation'));menu.textContent='☰';}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',i18n.t(open?'Close navigation':'Open navigation'));menu.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
const projects={
 console:{title:'MRSO Console',period:'OCT — NOV 2026',count:'1,329 commits',repo:'ops-mrso-console',description:'The largest project in this build log. Teams register sources, review candidate wiki entries, manage a shared glossary, and publish to Confluence or a GitHub data repository.'},
 notetaker:{title:'Notetaker',period:'JUN — OCT 2026',count:'619 commits',repo:'notetaker-landing',description:'A setup page that grew into a meeting-notes drafting pipeline: Outlook rosters, MS365 connections, checklist-scored meeting detection, and recovery for quarantined exports.'},
 hub:{title:'Ops Content Hub',period:'JUN — NOV 2026',count:'287 commits',repo:'ops-content-hub',description:'An operations workspace running on EKS with company SSO and an embedded Hermes agent. Personal Outlook connections and clearer connection status followed.'}
};
const projectImages={console:'product-mrso-console.jpg',notetaker:'product-notetakter.jpg',hub:'product-content-hub.jpg'};
const tabs=[...document.querySelectorAll('[data-stage]')];
function activate(tab){
 const changed=tab.getAttribute('aria-selected')!=='true';
 tabs.forEach(button=>{const active=button===tab;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
 const key=tab.dataset.stage,p=projects[key],panel=document.querySelector('#stage-preview'),img=panel.querySelector('img');
 panel.setAttribute('aria-labelledby',tab.id);img.src=`${document.body.dataset.assetBase || "assets/"}${projectImages[key]}`;img.alt=i18n.alt(`${p.title} product screenshot`);
 document.querySelector('#project-period').textContent=i18n.t(p.period);document.querySelector('#project-count').textContent=i18n.t(p.count);document.querySelector('#project-description').textContent=i18n.t(p.description);document.querySelector('#project-link').href=`https://github.com/krafton-playground/${p.repo}`;
 if(changed&&window.gsap&&!matchMedia('(prefers-reduced-motion: reduce)').matches)gsap.fromTo(img,{opacity:.3,y:16},{opacity:1,y:0,duration:.45,overwrite:true,ease:'power2.out'});
}
document.addEventListener('portfolio:language',()=>activate(tabs.find(t=>t.getAttribute('aria-selected')==='true')||tabs[0]));
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>activate(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(index+1)%tabs.length;if(e.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();activate(tabs[next]);tabs[next].focus();}});});i18n.init();

// Visible-time carousel: 01 → 02 → 03, with a 1.5 second progress indicator.
(() => {
 const section=document.querySelector('.problem-grid'),list=document.querySelector('.stages');
 const control=document.createElement('button');control.type='button';control.className='project-autoplay';section.after(control);
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let paused=reduced.matches,visible=false,frame=0,last=0,elapsed=0;
 const interval=1500;
 function label(){control.textContent=i18n.locale==='ko'?(paused?'프로젝트 자동 재생':'프로젝트 일시정지'):(paused?'Play projects':'Pause projects');control.setAttribute('aria-pressed',String(paused));}
 function clear(){cancelAnimationFrame(frame);frame=0;last=0;}
 function reset(){elapsed=0;last=0;list.style.setProperty('--project-progress','0');}
 function tick(now){
  if(paused||!visible||document.hidden||section.contains(document.activeElement)){clear();return;}
  if(last)elapsed+=Math.min(now-last,100);last=now;
  if(elapsed>=interval){const index=tabs.findIndex(t=>t.getAttribute('aria-selected')==='true');activate(tabs[(index+1)%tabs.length]);elapsed=0;}
  list.style.setProperty('--project-progress',String(elapsed/interval));frame=requestAnimationFrame(tick);
 }
 function run(){if(!frame&&!paused&&visible&&!document.hidden&&!section.contains(document.activeElement))frame=requestAnimationFrame(tick);}
 control.addEventListener('click',()=>{paused=!paused;label();if(paused)clear();else run();});
 tabs.forEach(tab=>{tab.addEventListener('click',reset);tab.addEventListener('keydown',reset);});
 section.addEventListener('focusin',clear);section.addEventListener('focusout',()=>requestAnimationFrame(run));
 document.addEventListener('visibilitychange',()=>document.hidden?clear():run());
 new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)run();else{clear();reset();}},{threshold:.35}).observe(section);
 document.addEventListener('portfolio:language',label);
 reduced.addEventListener('change',()=>{paused=reduced.matches;label();if(paused)clear();else run();});
 list.classList.add('auto-stages');label();
})();

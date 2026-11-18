// Keep the poster visible if autoplay is blocked or the video cannot load.
(() => {
 const video=document.querySelector('.hero-video');if(!video)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 video.muted=true;
 video.addEventListener('playing',()=>video.classList.add('is-playing'));
 video.addEventListener('error',()=>video.classList.remove('is-playing'));
 const update=()=>{
  if(reduced.matches){video.pause();video.classList.remove('is-playing');}
  else if(document.hidden){video.pause();}
  else video.play().catch(()=>video.classList.remove('is-playing'));
 };
 reduced.addEventListener('change',update);
 document.addEventListener('visibilitychange',update);
 update();
})();
/* GSAP recreation of the reference's visible motion patterns. */
(() => {
 if(!window.gsap||!window.ScrollTrigger)return;
 gsap.registerPlugin(ScrollTrigger);
 // One timed opening: image first, panels part second, copy last. No scroll dependency.
 const heroMedia=gsap.matchMedia();
 heroMedia.add('(prefers-reduced-motion: no-preference)',()=>{
  let disposed=false;
  const intro=gsap.timeline({id:'hero-intro',paused:true,defaults:{ease:'power2.out'}})
   .addLabel('image',0)
   .from('.nav',{opacity:0,duration:.6},2.15)
   .from('.hero-content .backed',{opacity:0,duration:.55},2.15)
   .from('.hero h1',{opacity:0,duration:.8},2.3)
   .from('.hero-sub',{opacity:0,duration:.6},2.55)
   .from('.hero .actions a',{opacity:0,duration:.5,stagger:.08},2.65)
   .addLabel('panels',.65)
   .fromTo('.hero-left',{x:0,xPercent:0},{x:0,xPercent:-80,duration:1.35,ease:'power3.inOut'},'panels')
   .fromTo('.hero-right',{x:0,xPercent:0},{x:0,xPercent:80,duration:1.35,ease:'power3.inOut'},'panels');
  // Hold the opening until all three photographs are decoded, avoiding a blank first frame.
  Promise.all([...document.querySelectorAll('.hero-images img')].map(img=>img.decode?.().catch(()=>{})||Promise.resolve())).then(()=>{
   if(!disposed)intro.play(0);
  });
  return ()=>{disposed=true;};
 });
 const media=gsap.matchMedia();
 media.add({motion:'(prefers-reduced-motion: no-preference)',desktop:'(min-width: 1000px) and (min-height: 700px)'},context=>{
  if(!context.conditions.motion)return;
  const desktop=context.conditions.desktop;
  let cleanupMarquee=()=>{};
  // Entrances follow scroll progress, so they remain visible while approaching a section.
  // Reverse naturally on upward scrolling; reduced-motion skips this context entirely.
  function reveal(targets,trigger,from={},end='top 52%'){
   const elements=gsap.utils.toArray(targets);if(!elements.length)return;
   return gsap.fromTo(elements,{y:64,opacity:0,...from},{y:0,x:0,scale:1,rotation:0,opacity:1,stagger:.12,ease:'power2.out',scrollTrigger:{trigger,start:'top 94%',end,scrub:.65,invalidateOnRefresh:true}});
  }
  document.querySelectorAll('.section-head').forEach(head=>{
   reveal(head.querySelectorAll('.eyebrow,h2'),head,{y:54},'top 58%');
   const copy=head.querySelectorAll('p:not(.eyebrow),a');
   reveal(copy,head,{y:78},'top 42%');
  });
  reveal('.problem>.eyebrow,.problem>h2','.problem>h2',{y:60},'top 48%');
  reveal('.problem-grid> *','.problem-grid',{y:90,scale:.94},'top 40%');
  reveal('.conversion>div:last-child','.conversion',{y:80},'top 28%');
  reveal('.portfolio-number','.conversion',{y:110,scale:.8},'top 36%');
  document.querySelectorAll('.portfolio-feature,.wide-project').forEach(panel=>{
   reveal(panel,panel,{y:100,scale:.91},'top 35%');
   // The panel and its inner content arrive at different speeds, like Saru's dashboard.
   const copy=panel.querySelector('.feature-copy');
   if(copy)reveal(copy.children,panel,{y:45},'top 20%');
  });
  document.querySelectorAll('.three-up,.prototype-grid,.results-grid').forEach(group=>{
   [...group.children].forEach((card,index)=>reveal(card,card,{y:85+index*18,scale:.93},'top 48%'));
  });
  const integration=document.querySelector('.portfolio-integration');
  if(integration){
   reveal(integration.querySelector(':scope > img'),integration,{x:-70,y:30,scale:1.08},'top 25%');
   reveal(integration.querySelector(':scope > div'),integration,{x:70,y:65},'top 25%');
   reveal(integration.querySelectorAll('.integration-logos span'),integration,{y:55,scale:.8},'top 5%');
  }
  gsap.fromTo('.mrso-bubble',{opacity:0,x:i=>i%2?90:-90,y:130,scale:.65,filter:'blur(8px)'},{opacity:1,x:0,y:0,scale:1,filter:'blur(0px)',stagger:.18,duration:1.1,ease:'back.out(1.35)',scrollTrigger:{trigger:'.mrso-showcase',start:'top 75%',toggleActions:'restart none none reverse'}});
  ScrollTrigger.create({trigger:'.mrso-showcase',start:'top bottom',end:'bottom top',toggleClass:'bubbles-in-view'});
  reveal('.original-summary .lede','.original-summary',{y:55},'top 52%');
  reveal('.original-summary .facts li','.original-summary .facts',{y:70,scale:.9},'top 48%');
  reveal('.daily-activity .sec-head','.daily-activity',{y:55},'top 52%');
  reveal('.daily-activity .strip','.daily-activity .strip',{y:85,scale:.95},'top 42%');
  reveal('.evidence-note,.repository-ledger','.evidence-note',{y:40},'top 52%');
  reveal('.footer-top>*','.footer-top',{y:65},'top 40%');
  reveal('.footer-links>div','.footer-links',{y:50},'top 42%');
  const tracks=[];
  const partnerRow=document.querySelector('.partners>div');
  if(partnerRow){
   partnerRow.classList.add('partners-track');const originals=[...partnerRow.children];
   originals.forEach(el=>{const copy=el.cloneNode(true);copy.setAttribute('aria-hidden','true');copy.dataset.motionClone='';partnerRow.appendChild(copy);});
   const shift=()=>originals[originals.length-1].offsetLeft+originals[originals.length-1].offsetWidth+parseFloat(getComputedStyle(partnerRow).gap)-originals[0].offsetLeft;
   tracks.push(gsap.to(partnerRow,{x:()=>-shift(),duration:24,ease:'none',repeat:-1}));
   const control=document.createElement('button');control.className='motion-pause';control.textContent=i18n.locale==='ko'?'움직임 일시정지':'Pause motion';control.setAttribute('aria-pressed','false');partnerRow.after(control);
   control.addEventListener('click',()=>{const paused=control.getAttribute('aria-pressed')!=='true';tracks.forEach(t=>t.paused(paused));control.setAttribute('aria-pressed',String(paused));updateControl();});
   function updateControl(){const paused=control.getAttribute('aria-pressed')==='true';control.textContent=i18n.locale==='ko'?(paused?'움직임 재생':'움직임 일시정지'):(paused?'Resume motion':'Pause motion');}
   document.addEventListener('portfolio:language',updateControl);
   cleanupMarquee=()=>{document.removeEventListener('portfolio:language',updateControl);control.remove();partnerRow.querySelectorAll('[data-motion-clone]').forEach(el=>el.remove());partnerRow.classList.remove('partners-track');};
  }
  document.querySelectorAll('.metric strong,.portfolio-number').forEach(el=>{
   const target=Number(el.textContent.replaceAll(',',''));if(!Number.isFinite(target))return;
   ScrollTrigger.create({trigger:el,start:'top 95%',once:true,onEnter:()=>{const value={n:0};gsap.to(value,{n:target,duration:1.5,ease:'power2.out',onUpdate:()=>{el.textContent=Math.round(value.n).toLocaleString('en-US');},onComplete:()=>{el.textContent=target.toLocaleString('en-US');}});}});
  });
  gsap.from('.bars i',{scaleY:0,transformOrigin:'bottom',stagger:.06,duration:1,ease:'power2.out',scrollTrigger:{trigger:'.bars',start:'top 95%',once:true}});
  gsap.from('.footer-wordmark',{yPercent:50,opacity:0,duration:1.2,ease:'power3.out',scrollTrigger:{trigger:'.footer-wordmark',start:'top 98%',once:true}});
  return ()=>{cleanupMarquee();document.querySelectorAll('.metric strong,.portfolio-number').forEach(el=>{const values=['2,824','27','129','152'];if(el.classList.contains('portfolio-number'))el.textContent='2,824';else el.textContent=values[[...document.querySelectorAll('.metric strong')].indexOf(el)];});};
 });
 const refresh=()=>requestAnimationFrame(()=>{ScrollTrigger.sort();ScrollTrigger.refresh();});
 refresh();
 document.addEventListener('portfolio:language',refresh);
 document.querySelector('.repository-ledger').addEventListener('toggle',refresh);
 document.querySelectorAll('img').forEach(img=>img.addEventListener('load',refresh,{once:true}));
 window.addEventListener('load',refresh,{once:true});
 document.fonts?.ready.then(refresh);
})();

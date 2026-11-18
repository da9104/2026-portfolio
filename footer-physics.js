/* Original DOM renderer using Matter.js rigid bodies; no canvas text rasterization. */
(() => {
 const stage=document.querySelector('.footer-playground'), blocks=[...document.querySelectorAll('.footer-block')];
 if(!stage||!window.Matter)return;
 const {Engine,Bodies,Body,Composite,Constraint,Query}=Matter;
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 let engine,bodies=[],frame=0,visible=false,last=0,drag=null,started=false;
 function stop(){cancelAnimationFrame(frame);frame=0;last=0;}
 function render(){bodies.forEach((body,i)=>{const el=blocks[i];el.style.transform=`translate(${body.position.x-el.offsetWidth/2}px,${body.position.y-el.offsetHeight/2}px) rotate(${body.angle}rad)`;});}
 function tick(time){if(!visible||document.hidden||motion.matches){stop();return;}Engine.update(engine,Math.min(time-last||16.67,33.33));last=time;render();frame=requestAnimationFrame(tick);}
 function run(){const rect=stage.getBoundingClientRect();visible=rect.bottom>0&&rect.top<innerHeight;if(engine&&!frame&&visible&&!document.hidden&&!motion.matches)frame=requestAnimationFrame(tick);}
 function build(){
  stop();if(engine)Engine.clear(engine);blocks.forEach(el=>el.removeAttribute('style'));stage.classList.remove('physics-ready');
  if(motion.matches)return;
  stage.classList.add('physics-ready');engine=Engine.create({enableSleeping:true});engine.gravity.y=1.25;
  const w=stage.clientWidth,h=stage.clientHeight;
  Composite.add(engine.world,[Bodies.rectangle(w/2,h+40,w+160,80,{isStatic:true}),Bodies.rectangle(-40,h/2,80,h*5,{isStatic:true}),Bodies.rectangle(w+40,h/2,80,h*5,{isStatic:true})]);
  bodies=blocks.map((el,i)=>{const bw=el.offsetWidth,bh=el.offsetHeight;const x=bw/2+((i*0.381966+.12)%1)*Math.max(0,w-bw);const body=Bodies.rectangle(x,-80-i*105,bw,bh,{chamfer:{radius:Math.min(18,bh/3)},restitution:.3,friction:.55,frictionAir:.008,angle:(i%2?1:-1)*(.12+i*.025)});Composite.add(engine.world,body);return body;});render();run();
 }
 const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible&&!started){started=true;build();}else if(visible)run();else stop();},{threshold:.1});observer.observe(stage);
 function release(){if(drag&&engine)Composite.remove(engine.world,drag);drag=null;stage.classList.remove('dragging');}
 stage.addEventListener('pointerdown',e=>{if(!engine||motion.matches)return;const r=stage.getBoundingClientRect(),point={x:e.clientX-r.left,y:e.clientY-r.top};const body=Query.point(bodies,point)[0];if(!body)return;drag=Constraint.create({pointA:point,bodyB:body,pointB:{x:point.x-body.position.x,y:point.y-body.position.y},stiffness:.15,damping:.1,length:0});Composite.add(engine.world,drag);Matter.Sleeping.set(body,false);stage.setPointerCapture(e.pointerId);stage.classList.add('dragging');run();});
 stage.addEventListener('pointermove',e=>{if(!drag)return;const r=stage.getBoundingClientRect();drag.pointA={x:e.clientX-r.left,y:e.clientY-r.top};});
 ['pointerup','pointercancel','lostpointercapture'].forEach(name=>stage.addEventListener(name,release));
 document.addEventListener('visibilitychange',()=>document.hidden?stop():run());
 let resize;new ResizeObserver(()=>{clearTimeout(resize);resize=setTimeout(()=>{if(started){release();build();}},150);}).observe(stage);
 document.fonts.ready.then(()=>{if(started){release();build();}});
 motion.addEventListener('change',()=>{if(started){release();build();}});
})();

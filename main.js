

document.addEventListener('DOMContentLoaded',function(){
  // Hamburger menu
  const t=document.querySelector('.mobile-nav-toggle'),n=document.querySelector('header nav');
  if(t&&n){
    t.addEventListener('click',()=>{
      n.classList.toggle('open');
      t.setAttribute('aria-label',n.classList.contains('open')?'Close navigation':'Open navigation');
    });
    n.querySelectorAll('a').forEach(e=>e.addEventListener('click',()=>n.classList.remove('open')));
  }
  // Copyright year
  const y=document.getElementById('copyright-year');
  if(y)y.textContent=(new Date).getFullYear();
  // Particle burst
  const h=document.querySelector('header h1');
  if(!h)return;
  const c=document.createElement('canvas');
  Object.assign(c.style,{position:'fixed',left:0,top:0,pointerEvents:'none',zIndex:1000});
  document.body.appendChild(c);
  function r(){c.width=window.innerWidth,c.height=window.innerHeight}
  r();window.addEventListener('resize',r);
  function a(){const p=['#39ff14','#FFD700','#00BFFF','#FF5555','#FFAA00','#55FF55','#AAAAAA','#5555FF'];return p[Math.floor(Math.random()*p.length)]}
  function b(x,y){const g=c.getContext('2d'),s=[];for(let i=0;i<40;i++){const d=Math.random()*2*Math.PI,m=2+3*Math.random();s.push({x,y,vx:Math.cos(d)*m,vy:Math.sin(d)*m,color:a(),life:40+20*Math.random()})}let f=0;!function e(){g.clearRect(0,0,c.width,c.height),s.forEach(p=>{g.beginPath(),g.arc(p.x,p.y,6,0,2*Math.PI),g.fillStyle=p.color,g.globalAlpha=Math.max(0,(p.life-f)/p.life),g.fill(),p.x+=p.vx,p.y+=p.vy,p.vy+=.15}),g.globalAlpha=1,++f<60?requestAnimationFrame(e):g.clearRect(0,0,c.width,c.height)}()}
  h.style.cursor='pointer',h.title='Click me!',h.addEventListener('click',e=>{const r=h.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;b(x,y)})
});

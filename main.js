// Modern, optimized JavaScript for eaglercraftex
document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('header nav');
  
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const isOpen = nav.classList.contains('open');
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    
    // Close nav when clicking on a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }
  
  // Update copyright year
  const copyrightYear = document.getElementById('copyright-year');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
  
  // Particle burst effect (optimized)
  const h1 = document.querySelector('header h1');
  if (!h1) return;
  
  // Create canvas for particle effect
  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, {
    position: 'fixed',
    left: '0',
    top: '0',
    pointerEvents: 'none',
    zIndex: '1000'
  });
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d', { alpha: true });
  
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Particle colors
  const colors = ['#39ff14', '#FFD700', '#00BFFF', '#FF5555', '#FFAA00', '#55FF55', '#AAAAAA', '#5555FF'];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
  
  const createBurst = (x, y) => {
    const particles = [];
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 3;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: getRandomColor(),
        life: 40 + Math.random() * 20
      });
    }
    
    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, (p.life - frame) / p.life);
        ctx.fill();
        
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15; // gravity
      });
      
      ctx.globalAlpha = 1;
      
      if (++frame < 60) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    
    animate();
  };
  
  h1.style.cursor = 'pointer';
  h1.title = 'Click me!';
  h1.addEventListener('click', (e) => {
    const rect = h1.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    createBurst(x, y);
  });
});

export function initCyberParticles() {
  const canvas = document.getElementById('cyber-particles') as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get 2D context');
    return;
  }

  // Caracteres de Matrix: números, letras latinas y katakana
  const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

  let particles: { x: number; y: number; speed: number; size: number; alpha: number; char: string; rotation: number }[] = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
    createParticles();
  }

  function createParticles() {
    particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.7 + Math.random() * 1,
      size: 7 + Math.random() * 8,
      alpha: 0.3 + Math.random() * 0.7,
      char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
      rotation: Math.random() > 1 ? Math.PI : 0, // 100% invertidos
    }));
  }

  window.addEventListener('resize', resize);
  resize();

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (const p of particles) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      
      ctx.fillStyle = `rgba(251, 238, 8, ${p.alpha})`;
      ctx.font = `${p.size}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(p.char, 0, 0);
      
      ctx.restore();
      
      p.y += p.speed;
      if (p.y > canvas.height) {
        p.y = 0;
        p.x = Math.random() * canvas.width;
        p.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        p.rotation = Math.random() > 0.5 ? Math.PI : 0;
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}
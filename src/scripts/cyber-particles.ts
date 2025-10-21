export function initCyberParticles() {
  const canvas = document.getElementById('cyber-particles') as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get 2D context');
    return;
  }

  let particles: { x: number; y: number; speed: number; size: number; alpha: number }[] = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.5 + Math.random() * 1,
      size: 1 + Math.random() * 2,
      alpha: 0.3 + Math.random() * 0.7,
    }));
  }

  window.addEventListener('resize', resize);
  resize(); // Esto también llama a createParticles

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      ctx.fillStyle = `rgba(16, 185, 129, ${p.alpha})`; // verde-emerald
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      p.y -= p.speed;
      if (p.y < 0) {
        p.y = canvas.height;
        p.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}


document.addEventListener('DOMContentLoaded', function(){
  // simple fade-in on scroll
  const els = document.querySelectorAll('.card, .project, .hero-copy, .hero-media');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
  }, {threshold:0.15});
  els.forEach(el=>obs.observe(el));
});

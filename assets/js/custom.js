document.addEventListener('mousemove', function(e) {
  // Find the card if the mouse is over it
  const card = e.target.closest('.balatro-card');
  if (!card) return;
  
  // Stop the idle float animation so the mouse can take over
  card.style.animation = 'none'; 
  
  // Calculate mouse position relative to the card
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  // Calculate tilt (Max 18 degrees)
  const rotateX = ((y - centerY) / centerY) * -18; 
  const rotateY = ((x - centerX) / centerX) * 18;
  
  // Apply the 3D tilt
  card.style.transform = `perspective(1000px) scale3d(1.06, 1.06, 1.06) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
  // Move the holographic glare to follow the cursor
  const glare = card.querySelector('.balatro-glare');
  if (glare) {
    glare.style.opacity = '1';
    glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 65%)`;
  }
});

document.addEventListener('mouseout', function(e) {
  const card = e.target.closest('.balatro-card');
  if (!card) return;
  
  // Prevent resetting if the mouse is just moving over the badge or glare
  if (card.contains(e.relatedTarget)) return;

  // Reset to idle floating
  card.style.animation = 'balatroFloat 3.5s ease-in-out infinite';
  card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  
  const glare = card.querySelector('.balatro-glare');
  if (glare) {
    glare.style.opacity = '0';
  }
});
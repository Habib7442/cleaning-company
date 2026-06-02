/**
 * Squeegee Before/After image comparison slider.
 * Enhances elements with class `squeegee-slider`.
 * Features requestAnimationFrame throttling and lerped interpolation for premium inertia.
 */
export function initSqueegeeSliders() {
  const sliders = document.querySelectorAll('.squeegee-slider');

  sliders.forEach(slider => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      slider.classList.add('reduced-motion');
      return;
    }

    const beforeImg = slider.querySelector('.squeegee-before');
    const afterImg = slider.querySelector('.squeegee-after');
    const handle = slider.querySelector('.squeegee-handle');
    const toggleBtn = slider.querySelector('.squeegee-toggle-btn');
    
    if (!beforeImg || !afterImg || !handle) return;

    let active = false;
    let position = 50; 
    let targetPosition = 50;
    let animationFrameId = null;

    // Set initial layout
    updatePosition(position);

    function updatePosition(pct) {
      afterImg.style.clipPath = `polygon(${pct}% 0, 100% 0, 100% 100%, ${pct}% 100%)`;
      handle.style.left = `${pct}%`;
      handle.setAttribute('aria-valuenow', Math.round(pct));
    }

    // Smooth animation loop using lerp (linear interpolation)
    function animate() {
      const diff = targetPosition - position;
      
      // If the difference is non-trivial, interpolate and request next frame
      if (Math.abs(diff) > 0.02) {
        position += diff * 0.18; // Lerp factor for smooth spring physics
        updatePosition(position);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        position = targetPosition;
        updatePosition(position);
        animationFrameId = null;
      }
    }

    function triggerAnimation() {
      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(animate);
      }
    }

    function handleMove(clientX) {
      const rect = slider.getBoundingClientRect();
      const x = clientX - rect.left;
      let pct = (x / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      targetPosition = pct;
      triggerAnimation();
    }

    // Click anywhere on slider container to move handle smoothly
    slider.addEventListener('click', (e) => {
      if (e.target.closest('.squeegee-handle')) return;
      handleMove(e.clientX);
    });

    // Mouse and Touch Event Listeners
    handle.addEventListener('mousedown', (e) => {
      active = true;
      slider.classList.add('dragging');
      e.preventDefault(); // Prevent text highlights
    });

    window.addEventListener('mouseup', () => {
      active = false;
      slider.classList.remove('dragging');
    });
    
    handle.addEventListener('touchstart', () => {
      active = true;
      slider.classList.add('dragging');
    }, { passive: true });

    window.addEventListener('touchend', () => {
      active = false;
      slider.classList.remove('dragging');
    });

    window.addEventListener('mousemove', (e) => {
      if (!active) return;
      handleMove(e.clientX);
    });

    window.addEventListener('touchmove', (e) => {
      if (!active) return;
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    }, { passive: true });

    // Keyboard navigation (WCAG accessibility)
    handle.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        targetPosition = Math.max(0, targetPosition - 8);
        triggerAnimation();
        e.preventDefault();
      } else if (e.key === 'ArrowRight') {
        targetPosition = Math.min(100, targetPosition + 8);
        triggerAnimation();
        e.preventDefault();
      }
    });

    // Accessible toggle button fallback
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        targetPosition = targetPosition === 50 || targetPosition < 50 ? 100 : 0;
        triggerAnimation();
      });
    }
  });
}

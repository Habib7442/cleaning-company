/**
 * Infinite city coverage marquee.
 * Multiplies content to ensure seamless loop and pauses on hover.
 */
export function initMarquees() {
  const marquees = document.querySelectorAll('.marquee-container');

  marquees.forEach(container => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      container.classList.add('reduced-motion');
      return;
    }

    const track = container.querySelector('.marquee-track');
    if (!track) return;

    // Duplicate content twice to guarantee seamless wrapping regardless of viewport width
    const originalContent = track.innerHTML;
    track.innerHTML = originalContent + originalContent + originalContent;

    // Optional: dynamic speed based on content width
    const speed = container.dataset.speed || 30; // seconds per full loop
    track.style.animationDuration = `${speed}s`;
  });
}

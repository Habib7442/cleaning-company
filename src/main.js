import './style.css';
import Lenis from 'lenis';
import { initSqueegeeSliders } from './components/squeegee.js';
import { initMarquees } from './components/marquee.js';
import { initPricingSelectors } from './components/pricing.js';
import { QuoteFlow } from './components/quote-flow.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Smooth Scroll (Lenis)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
      smoothWheel: true,
      syncTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // 2. Initialize Core Components
  initSqueegeeSliders();
  initMarquees();
  initPricingSelectors();

  // Initialize Quote Stepper if on the page
  if (document.getElementById('quote-flow-container')) {
    new QuoteFlow('quote-flow-container');
  }

  // 3. Navigation Scroll Transitions
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 4. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (revealElements.length > 0 && !prefersReducedMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Trigger once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Immediate show for reduced motion or fallback
    revealElements.forEach(el => el.classList.add('active'));
  }

  // 5. Mobile Hamburger Navigation Overlay
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const menuOverlay = document.querySelector('.mobile-menu-overlay');
  
  if (menuToggle && menuOverlay) {
    const closeBtn = menuOverlay.querySelector('.mobile-menu-close');

    menuToggle.addEventListener('click', () => {
      menuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeMenu = () => {
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    // Close menu when links are clicked
    menuOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
});

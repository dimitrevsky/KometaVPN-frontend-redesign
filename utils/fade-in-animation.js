import { gsap } from "gsap";

export function animateCards(elements, options = {}) {
  if (!elements || !elements.length) return;

  const { stagger = 0.2, duration = 0.8, ease = "power2.out" } = options;

  gsap.fromTo(
    elements,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      stagger,
      duration,
      ease,
    }
  );
}

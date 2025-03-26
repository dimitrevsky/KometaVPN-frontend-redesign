import gsap from "gsap"

export const animateCards = (cards, options = {}) => {
  gsap.fromTo(cards, 
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      stagger: options.stagger || 0.2,
      duration: options.duration || 0.8,
      ease: options.ease || "power2.out"
    }
  )
}
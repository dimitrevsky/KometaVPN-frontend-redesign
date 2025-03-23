import { gsap } from "gsap";

/**
 * Анимация fade-in для контейнеров
 * @param {HTMLElement[]} elements - Массив элементов для анимации
 * @param {Object} options - Параметры анимации
 * @param {number} options.stagger - Задержка между элементами
 * @param {number} options.duration - Длительность анимации
 * @param {string} options.ease - Эффект easing
 */
export function animateCards(elements, options = {}) {
  if (!elements || !elements.length) return;

  const { stagger = 0.2, duration = 0.8, ease = "power2.out" } = options;

  gsap.fromTo(
    elements,
    { opacity: 0, y: 100 }, // Начальное состояние
    {
      opacity: 1, // Конечное состояние
      y: 0, // Конечное положение
      stagger, // Задержка между элементами
      duration, // Длительность анимации
      ease, // Эффект easing
    }
  );
}
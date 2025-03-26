import { useIntersectionObserver } from '@vueuse/core'

export const useIntersectionAnimation = (elementRef, animationCallback) => {
  const { stop } = useIntersectionObserver(
    elementRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting && elementRef.value) {
        animationCallback(elementRef.value)
        stop()
      }
    },
    { threshold: 0 }
  )
}
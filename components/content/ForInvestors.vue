<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text = ref(null);
const video = ref(null);

function setupAnimations(element) {
  gsap.fromTo(
    element,
    { opacity: 0, y: 120 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "expo",
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        once: true,
      },
    }
  );
}

onMounted(() => {
  setupAnimations(text.value);
  setupAnimations(video.value);
});
</script>

<template>
  <section class="investors">
    <div class="investors__content card__title--transparent">
      <div ref="text" class="investors__content--text">
        <h1 class="investors__title">Для инвесторов</h1>
        <p class="investors__description">
          Если вы инвестор и заинтересованы в&nbsp;сотрудничестве с нами, то свяжитесь
        </p>
      </div>

      <div ref="video" class="investors__image">
        <video autoplay loop muted playsinline width="100%" height="auto">
          <source src="public/video/ManVideo.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="investors__link link--margin-top">
        <a href="">
          Стать инвестором
          <img src="/chevron-right.svg" alt="Стрелка вправо" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.investors {
  position: relative;
  display: flex;
  justify-content: space-between;
  min-height: 391px;
}

.investors__content--text {
  display: flex;
  gap: 24px;
  flex-flow: column;
}

.investors__description {
  max-width: 416px;
}

.investors__image {
  position: absolute;
  right: 0;

  @media (width <= 966px) {
    position: relative;
  }
}
</style>

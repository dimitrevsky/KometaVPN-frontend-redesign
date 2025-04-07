<script setup>
import UiButton from "../ui/uiButton.vue";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImgRef = ref(null);

function setupImgAnimation(el) {
  gsap.fromTo(
    el,
    { top: "-20%", left: "200%" },
    {
      top: "50%",
      left: "50%",
      duration: 1.6,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".investments__img__comet",
        start: "top 70%",
        once: true,
      },
    }
  );
}

onMounted(() => {
  setupImgAnimation(ImgRef.value);
});
</script>

<template>
  <section class="card__title--border">
    <div class="investments--wrapper">
      <div class="investments__text--wrapper">
        <h1>Инвестируй в KMT</h1>
        <p>
          KMT это наш мемкойн на платформе Blum, Мы ищем тех, кто разделяет наше видение интернета. Инвестируй в KMT и
          стань частью проекта, который растет как комета на небосклоне крипты!
        </p>
      </div>
      <div>
        <UiButton class="investments__button" text="Связаться с нами" />
      </div>
    </div>

    <div class="investments__img--wrapper">
      <img src="/public/img/Earth.png" class="investments__img__earth" alt="Earth" />
      <img src="/public/img/comet.png" class="investments__img__comet" alt="comet" ref="ImgRef" />
    </div>
  </section>
</template>

<style scoped>
.card__title--border {
  flex-flow: row;
  gap: 50px;
  justify-content: space-between;
}

.investments__img--wrapper {
  position: relative;
  display: flex;
  align-items: center;

  @media (width <= 520px) {
    display: none;
  }

  .investments__img__comet {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.investments--wrapper {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  gap: 40px;

  .investments__text--wrapper {
    display: flex;
    flex-flow: column;
    gap: 24px;
  }

  p {
    max-width: 502px;
  }

  .investments__button {
    max-width: 474px;
  }
}
</style>

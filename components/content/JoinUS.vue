<script setup>
import UiButton from "../ui/uiButton.vue";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImgPhoneRef = ref(null);
const ImgManRef = ref(null);

function setupImgPhoneAnimation(el) {
  gsap.fromTo(
    el,
    { opacity: 0, rotate: "-8deg", y: "100%", x: 300 },
    {
      x: "50%",
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power4",
      scrollTrigger: {
        trigger: ".join__screenshot-wrapper",
        start: "top 70%",
        once: true,
      },
    }
  );
}

function setupImgManAnimation(el) {
  gsap.fromTo(
    el,

    { opacity: 0, y: "100%", x: "-50%" },

    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.2,
      ease: "sine.Out",
      scrollTrigger: {
        trigger: ".join--wrapper",
        start: "top 60%",
        once: true,
      },
    }
  );
}

onMounted(() => {
  setupImgPhoneAnimation(ImgPhoneRef.value);
  setupImgManAnimation(ImgManRef.value);
});
</script>

<template>
  <section>
    <div class="join--wrapper">
      <div class="join__text">
        <div class="card__title--transparent">
          <h1>Присоединяйся к нам!</h1>
          <p>Следи за новостями и общайся с нами в Telegram</p>
        </div>

        <div class="join__button">
          <img src="/public/img/welcoming-man.png" alt="WelcomingMan" class="join__button-img" ref="ImgManRef" />
          <UiButton text="Присоединиться" />
        </div>
      </div>

      <div class="join__screenshot-wrapper">
        <img src="/public//img/PhoneTgChannel.png" alt="PhoneTg" class="join__screenshot-img" ref="ImgPhoneRef" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.card__title--transparent {
  justify-content: space-between;
}

.join__text {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.join__button {
  position: relative;
  max-width: 574px;
  overflow: hidden;

  img {
    position: relative;
    bottom: -20px;
    left: 50%;
    max-width: 100%;
    height: auto;
    z-index: -10;
  }
}

.join--wrapper {
  display: flex;
  justify-content: space-between;
  gap: 40px 0;

  @media (width <= 1272px) {
    flex-direction: column-reverse;
    align-items: center;
  }
}

.join__screenshot-img {
  border: 3px solid #ffff inset;
  border-radius: 45px;
}

.join__screenshot-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 589px;
  height: 474px;

  border: 2px solid var(--border-color);
  border-radius: 24px;

  img {
    position: absolute;
    max-width: 320px;
  }
}
</style>

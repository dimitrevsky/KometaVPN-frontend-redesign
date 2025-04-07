<script setup>
import UiButton from "~/components/ui/uiButton.vue";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imgRef = ref([]);

const setImageRef = (el) => {
  imgRef.value.push(el);
};

function animateImages() {
  imgRef.value.forEach((img, index) => {
    gsap.fromTo(
      img,
      {
        opacity: 0,
        top: "100%",
      },
      {
        opacity: 1,
        top: "50%",
        duration: 0.7,
        delay: index * 0.1,
        ease: "back.out",
        scrollTrigger: {
          trigger: ".extansion__card-imgs",
          start: "top 70%",
          once: true,
        },
      }
    );
  });
}

const imgData = [
  {
    title: "ExtensionTurnOn",
    src: "/img/extension/ExtensionTurnOn.png",
  },
  {
    title: "ExtensionTurnedOff",
    src: "/img/extension/ExtensionTurnedOff.png",
  },
  {
    title: "ExtensionError",
    src: "/img/extension/ExtensionError.png",
  },
  {
    title: "ExtensionSelect",
    src: "/img/extension/ExtensionSelect.png",
  },
  {
    title: "ExtensionSelect",
    src: "/img/extension/ExtensionSelect.png",
  },
];

onMounted(() => {
  animateImages();
});
</script>

<template>
  <section>
    <div class="extansion--wrapper">
      <div class="card__title--transparent">
        <h1>Наши текущие решения</h1>
      </div>

      <div class="extansion--cards-wrapper">
        <div class="card__title--border extansion__card">
          <div class="card--text-wrapper">
            <h2>Браузерное расширение</h2>
            <p>Простое и удобное расширение для браузера</p>
          </div>

          <div class="extansion--btn">
            <UiButton text="Установить расширение" />
          </div>
        </div>

        <div class="extansion__card-imgs">
          <img
            v-for="(img, index) in imgData"
            :key="index"
            :ref="setImageRef"
            class="image-carousel"
            :src="img.src"
            :alt="img.title"
            :data-index="index"
          />
        </div>
      </div>

      <div class="extansion--cards-wrapper phone">
        <div class="card__title--border extansion__card phone">
          <div class="card--text-wrapper">
            <h2>Браузерное расширение</h2>
            <p>Простое и удобное расширение для браузера</p>
          </div>

          <div class="extansion__card-imgs">
            <img
              v-for="(img, index) in imgData"
              :key="index"
              :ref="setImageRef"
              class="image-carousel"
              :src="img.src"
              :alt="img.title"
              :data-index="index"
            />
          </div>

          <div class="extansion--btn">
            <UiButton text="Установить расширение" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.extansion--wrapper {
  display: flex;
  flex-flow: column;
  
  gap: 48px;

  .extansion__card-imgs {
    position: relative;
    background-color: #4fbbd1;
    flex-grow: 1;
    border-radius: 24px;
    z-index: 1000;
    overflow: hidden;

    @media (width <= 1210px) {
      min-height: 640px;
    }

    .image-carousel {
      position: absolute;
      border-radius: 24px;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &:nth-child(1) {
        z-index: 1;
      }
      &:nth-child(2) {
        left: 35%;
        filter: blur(3px) brightness(50%);
      }
      &:nth-child(3) {
        left: 65%;
        filter: blur(3px) brightness(50%);
      }
      &:nth-child(4) {
        left: 25%;
        filter: blur(6px) brightness(20%);
        z-index: -1;
      }
      &:nth-child(5) {
        left: 75%;
        filter: blur(6px) brightness(20%);
        z-index: -1;
      }
    }
  }

  .extansion--cards-wrapper {
    display: flex;
    gap: 32px;

    @media (width <= 1210px) {
      display: none;
    }

    &.phone {
      display: none;

      @media (width <= 1210px) {
        display: flex;
      }
    }
  }
}
.extansion__card {
  width: 524px;
  min-height: 518px;
  justify-content: space-between;

  @media (width <= 1210px) {
    width: 100%;
  }
}
</style>

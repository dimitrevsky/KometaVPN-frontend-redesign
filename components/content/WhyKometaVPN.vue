<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardRefs = ref([]);

function setupCardAnimation(cardElements) {
  gsap.fromTo(
    cardElements,
    { opacity: 0, y: 120 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".options--wrapper",
        start: "top 70%",
        once: true,
      },
    }
  );
}

onMounted(() => {
  setupCardAnimation(cardRefs.value);
});

const cardData = [
  {
    title: "Децентрализация",
    description: "Никаких посредников, только ты и сеть",
    img: "/img/options/DecentralizationImg.png",
  },
  {
    title: "Безопасность",
    description: "Шифрование на всех уровнях",
    img: "/img/options/SafetyImg.png",
  },
  {
    title: "Мемкойн KMT",
    description: "Инвестируй в проект с душой и юмором",
    img: "/img/options/MemeCoinImg.png",
  },
  {
    title: "Гибкость",
    description: "Пользуйся или зарабатывай — выбор за тобой",
    img: "/img/options/DecentralizationImg.png",
  },
];
</script>

<template>
  <section class="why-kometa">
    <div class="card__title--transparent">
      <h1>Почему Kometa VPN?</h1>
      <p>
        Kometa это децентрализованный VPN, <br />где ты можешь быть как пользователем,<br />
        так и провайдером
      </p>
    </div>

    <div class="options--wrapper">
      <div
        class="card__title--border options--card"
        v-for="(card, index) in cardData"
        :key="card.title"
        :ref="(el) => (cardRefs[index] = el)"
      >
        <div class="card--text-wrapper">
          <h2>{{ card.title }}</h2>
          <p>{{ card.description }}</p>
        </div>

        <div class="options--img">
          <img :src="card.img" alt="optionImg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-kometa {
  display: flex;
  flex-flow: column;
  gap: 48px;

  .options--wrapper {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-flow: row;
    flex-wrap: wrap;

    .options--card {
      display: flex;
      justify-content: space-between;
      padding: 24px;
      width: 300px;
      opacity: 0; /* Начальное состояние для анимации */
      transform: translateY(20px);

      @media (width <= 755px) {
        width: 100%;
      }
    }

    .options--img {
      position: relative;
      bottom: -32px;
      width: 146px;
    }
  }
}
</style>

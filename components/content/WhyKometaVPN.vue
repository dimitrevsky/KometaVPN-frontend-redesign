<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const card = ref([]);

function setupCardAnimation(cardElements) {
  gsap.fromTo(
    cardElements,
    { opacity: 0, y: 120 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.7,
      ease: "expo",
      scrollTrigger: {
        trigger: cardElements[0],
        start: "top 80%",
        once: true,
      },
    }
  );
}

onMounted(() => {
  setupCardAnimation(card.value);
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
      <div v-for="card in cardData" :key="card.title" class="card__title--border options--card" :ref="(el) => (cards[index] = el)">
        <div class="options--text-wrapper">
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

  .options--text-wrapper {
    display: flex;
    flex-flow: column;
    gap: 20px;

    h2 {
      font-size: var(--fz-subtitle);
    }

    p {
      font-size: var(--fz-card-text);
    }
  }
}
</style>

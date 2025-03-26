<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { animateCards } from "~/utils/fade-in-animation";
import { useIntersectionAnimation } from "~/composables/useIntersectionObserver";

const title = ref(null);
const paragraph = ref(null);
const cards = ref([]);

const dataHowThisWork = [
  {
    subtitle: "Стань клиентом",
    description: "Устанавливай наше расширение для браузера,<br />и просто пользуйся!",
    linkText: "Скачать расширение",
    image: "/img/PhonePicture.svg",
  },
  {
    subtitle: "Или поставщиком",
    description:
      "Или предоставляй свои сервера нам,<br /> устанавливаешь наше ПО и всё,<br /> а мы будем платить тебе за трафик!",
    linkText: "Стать поставщиком",
    image: "/img/MonkPicture.svg",
  },
];

function animateTitle(element) {
  if (!element) return;

  element.style.opacity = 0;

  const text = element.innerText;
  element.innerHTML = "";

  text.split("").forEach((letter) => {
    const span = document.createElement("span");
    span.style.opacity = 0;
    span.innerText = letter;
    element.appendChild(span);
  });

  gsap.to(element, { opacity: 1, duration: 0 });

  gsap.to(element.querySelectorAll("span"), {
    opacity: 1,
    stagger: 0.07,
    duration: 1,
    ease: "back.out",
  });
}

function animateParagraph(element) {
  if (!element) return;

  element.style.opacity = 0;

  const text = element.innerText;
  element.innerHTML = "";

  text.split("").forEach((letter) => {
    const span = document.createElement("span");
    span.style.opacity = 0;
    span.innerText = letter;
    element.appendChild(span);
  });

  gsap.to(element, { opacity: 1, duration: 0 });

  gsap.to(element.querySelectorAll("span"), {
    opacity: 1,
    stagger: 0.05,
    duration: 0.5,
    ease: "power1.out",
  });
}

onMounted(() => {
  if (cards.value.length) {
    gsap.set(cards.value, { opacity: 0, y: 100 });
  }

  useIntersectionAnimation(title, animateTitle);
  useIntersectionAnimation(paragraph, animateParagraph);
  useIntersectionAnimation(cards, () => animateCards(cards.value));
});
</script>

<template>
  <section>
    <div class="card__title--transparent">
      <h1 ref="title">Как это работает?</h1>
      <p ref="paragraph">Kometa это децентрализованный VPN, где ты можешь быть как пользователем, так и провайдером.</p>
    </div>
    <div
      class="how-this-work__wrapper card__title--border--wrapper"
      v-for="(card, index) in dataHowThisWork"
      :key="card.subtitle"
    >
      <div class="how-this-work__title-wrapper card__title--border" :ref="(el) => (cards[index] = el)">
        <div>
          <h2>{{ card.subtitle }}</h2>
        </div>
        <div>
          <p v-html="card.description"></p>
        </div>
        <div class="how-this-work__card-img">
          <img :src="card.image" alt="cardPicture" />
        </div>
        <div class="link--margin-top">
          <a href="">
            <p>{{ card.linkText }}</p>
            <img src="/chevron-right.svg" alt="chevronRight" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  display: grid;
  grid: auto-flow / repeat(2, 1fr);
  grid-template-areas:
    "transperent transperent"
    "border border";
  gap: 48px 16px;

  @media (width <= 1440px) {
    grid: repeat(3, max-content) / 1fr;
    gap: 16px;
  }
}

.card__title--transparent {
  grid-area: transperent;

  p {
    max-width: 360px;
  }

  @media (width <= 1440px) {
    grid-area: 1 / 1 / 1 / 2;
    padding-bottom: 22px;
  }
}

.how-this-work__wrapper {
  position: relative;

  .how-this-work__card-img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 100;
    @media (width <= 600px) {
      position: relative;
      width: 200px;
    }
  }

  .how-this-work__title-wrapper {
    &:nth-child(1) {
      grid-area: 2 / 1 / 2 / 2;
    }
    &:nth-child(2) {
      grid-area: 2 / 2 / 2 / 3;
    }
  }
}
</style>

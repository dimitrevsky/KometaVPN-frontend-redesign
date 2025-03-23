<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { animateCards } from "~/utils/fade-in-animation.js";

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

const title = ref(null);
const paragraph = ref(null);

const cards = ref([]);

function animateTitle(element) {
  const text = element.innerText;
  element.innerHTML = "";
  text.split("").forEach((letter) => {
    const span = document.createElement("span");
    span.innerText = letter;
    element.appendChild(span);
  });

  const letters = element.querySelectorAll("span");

  gsap.fromTo(
    letters,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      stagger: 0.07,
      duration: 1,
      ease: "back.out",
    }
  );
}

function animateParagraph(element) {
  const text = element.innerText;
  element.innerHTML = "";
  text.split("").forEach((letter) => {
    const span = document.createElement("span");
    span.innerText = letter;
    element.appendChild(span);
  });

  const letters = element.querySelectorAll("span");

  gsap.fromTo(
    letters,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      stagger: 0.05,
      duration: 0.3,
      ease: "power1.out",
    }
  );
}

onMounted(() => {
  animateTitle(title.value);
  animateParagraph(paragraph.value);
  animateCards(cards.value, { stagger: 0.2, duration: 0.8, ease: "power2.out" });
});
</script>

<template>
  <section>
    <div class="card__title--transparent">
      <h1 ref="title">Как это работает?</h1>
      <p ref="paragraph">
        Kometa это децентрализованный VPN,<br />где ты можешь быть как пользователем,<br />так и провайдером.
      </p>
    </div>
    <div
      class="how-this-work__wrapper card__title--border--wrapper"
      v-for="card in dataHowThisWork"
      :key="card.subtitle"
    >
      <div class="how-this-work__title-wrapper card__title--border" ref="cards">
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
      @media (width <= 1440px) {
      }
    }
    &:nth-child(2) {
      grid-area: 2 / 2 / 2 / 3;
      @media (width <= 1440px) {
      }
    }
  }
}
</style>

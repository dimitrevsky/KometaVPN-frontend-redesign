<template>
  <section>
    <div class="card__title--transparent">
      <h1>Как это работает?</h1>
      <p>
        Kometa это децентрализованный VPN, <br />
        где ты можешь быть как пользователем, <br />
        так и провайдером.
      </p>
    </div>
    <div class="card__title--border--wrapper" v-for="card in dataHowThisWork" :key="card.subtitle">
      <div class="card__title--border">
        <div>
          <h2>{{ card.subtitle }}</h2>
        </div>

        <div>
          <p v-html="card.description"></p>
        </div>

        <div class="card__img">
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

<script setup>
const dataHowThisWork = [
  {
    subtitle: "Стань клиентом",
    description: "Устанавливай наше расширение для браузера,<br />и просто пользуйся!",
    linkText: "Скачать расширение",
    image: "/img/PhonePicture.png",
  },
  {
    subtitle: "Или поставщиком",
    description:
      "Или предоставляй свои сервера нам,<br /> устанавливаешь наше ПО и всё,<br /> а мы будем платить тебе за трафик!",
    linkText: "Стать поставщиком",
    image: "/img/MonkPicture.png",
  },
];
</script>
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

.card__title--border--wrapper {
  position: relative;

  .card__title--border {
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

.card__img {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 100;
  @media (width <= 600px) {
    position: relative;
    width: 200px;
  }
}
</style>

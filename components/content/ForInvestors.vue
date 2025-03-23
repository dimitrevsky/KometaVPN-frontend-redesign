<template>
  <section class="investors">
    <div class="investors__content card__title--transparent">
      <h1 class="investors__title">Для инвесторов</h1>
      <p class="investors__description">Если вы инвестор и заинтересованы в&nbsp;сотрудничестве с нами, то свяжитесь</p>

      <div class="investors__image">
        <img src="/img/ManPicture.svg" alt="Инвестор" />
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
  height: 391px;

  @media (width <= 966px) {
    flex-flow: column;
  }
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

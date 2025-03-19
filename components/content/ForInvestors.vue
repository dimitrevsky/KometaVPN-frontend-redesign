<template>
  <section class="for__investors--section">
    <div class="for__investors card__title--transparent">
      <h1>Для инвесторов</h1>
      <p>Если вы инвестор и заинтересованы в&nbsp;сотрудничестве с нами, то свяжитесь</p>

      <div class="for__investors--img">
        <img src="/img/ManPicture.svg" alt="" />
      </div>

      <div class="link--margin-top">
        <a href="">
          Стать инвестором
          <img src="/chevron-right.svg" alt="" />
        </a>
      </div>
    </div>

  </section>
</template>

<script setup></script>

<style scoped>
.for__investors--section {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 391px;
  @media (width <= 966px) {
    flex-flow: column;
  }
}

.for__investors--img {
  position: absolute;
  right: 0;

  @media (width <= 966px) {
    position: relative;
  }
}

.for__investors {
  p {
    max-width: 416px;
  }
}
</style>

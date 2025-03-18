<template>
  <div class="flex-gap">
    <Title />
    <main>
      <Content />
    </main>
  </div>
</template>

<script setup>
import Title from "~/components/Title.vue";
</script>

<style scoped>
.flex-gap {
  display: flex;
  flex-flow: column;
  gap: calc(100px + 20dvw);
}
</style>

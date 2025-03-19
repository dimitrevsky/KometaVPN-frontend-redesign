<template>
  <div class="flex-gap">
    <Title />
    <Content />
  </div>
</template>

<script setup>
import Title from "~/components/Title.vue";
</script>

<style scoped>
.flex-gap {
  display: flex;
  flex-flow: column;
  gap: calc(100px + 25dvw);
}
</style>

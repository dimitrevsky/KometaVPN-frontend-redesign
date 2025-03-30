<script setup>
import Content from "~/components/Content.vue";
import Title from "~/components/Title.vue";
</script>

<template>
  <main>
    <Title />
    <Content />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-flow: column;
  gap: 200px;
}
</style>

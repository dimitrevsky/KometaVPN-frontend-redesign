<!-- род. компонент -->
<template>
  <main>
    <HowThisWork />
    <ForInvestors />
  </main>
</template>

<script setup>
import ForInvestors from "./content/ForInvestors.vue";
import HowThisWork from "./content/HowThisWork.vue";
</script>

<style scoped>
main {
  display: flex;
  flex-flow: column;
  gap: 100px;
}
</style>

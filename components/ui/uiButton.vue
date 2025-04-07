<script setup>
const props = defineProps({
  text: String,
});
</script>

<template>
  <button>
    {{ text }}
  </button>
</template>

<style scoped>
button {
  font-size: var(--fz-text-card);
  padding: 16px;
  width: 100%;
  background-color: var(--bg-color--button);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  text-wrap: nowrap;
  box-shadow: 0 0 20px 13px #000;
}
</style>

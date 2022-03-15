<script lang="ts" setup>
defineProps<{
  qrSrc: string,
  title: string,
  text: string,
}>();
</script>

<template>
  <article>
    <img :src="qrSrc" alt="qr code">
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
  </article>
</template>

<style scoped lang="scss">
article {
  @apply bg-white rounded-xl shadow-xl p-4 pb-12 w-[22rem] text-center space-y-6;
}
img {
  @apply rounded-xl;
}
h1 {
  @apply font-bold text-2xl;
}
p {
  @apply opacity-70;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import QRCode from '~/components/organisms/QRCode.vue';
import qrCode from '~/assets/image-qr-code.png';

const text = ref('Hello World!');
</script>

<template>
  <main>
    <QRCode
      :qr-src="qrCode"
      title="Improve your front-end skills by building projects"
      text="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    />
  </main>
</template>

<style scoped>
main {
  @apply flex items-center justify-center h-screen bg-greyishBlue text-text;
}
</style>

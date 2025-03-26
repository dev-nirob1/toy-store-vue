<script setup>
import { RouterView } from 'vue-router'
import HeaderSection from './components/section/HeaderSection.vue';
import FooterSection from './components/section/FooterSection.vue';
</script>

<template>
  <HeaderSection />
  <main>
    <RouterView />
  </main>
  <FooterSection />
</template>
<style>
main {
  min-height: calc(100vh - 320px);
  padding: 6rem 0;
}
</style>

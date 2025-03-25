<script setup>
import { RouterView } from 'vue-router'
import HeaderSection from './components/section/HeaderSection.vue';
import FooterSection from './components/section/FooterSection.vue';
</script>

<template>
  <HeaderSection />
  <RouterView />
  <FooterSection />
</template>

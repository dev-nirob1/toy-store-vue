<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const pageName = ref()

watchEffect(() => {
  pageName.value = route.params.page;

})
</script>

<template>
  about page
  <h1>{{ pageName }}</h1>
</template>

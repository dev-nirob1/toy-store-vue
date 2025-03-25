<script setup>
const props = defineProps({
  image: {
    type: [String, Object],
    required: true
  }
})
</script>
<template>
    <img class="height-full width-full" :src="image" alt="banner image">
</template>

<style scoped>

</style>
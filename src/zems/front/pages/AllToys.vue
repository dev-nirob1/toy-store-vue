<script setup>
import ToyCard from '@/components/widgets/ToyCard.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
const loading = ref(false)
const toys = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://toy-store-server-blond.vercel.app/toys');
    const data = await response.json();
    toys.value = data;
    loading.value = true;
  } catch (error) {
    console.log('error from all toys', error);
  }
})
// console.log(toys);
</script>

<template>
  <div class="search-input pt-2">
    <input type="search" name="search" id="" placeholder="Search By Toy Name">
  </div>
  <section class="container medium-2 large-4 gap-2 py-2 medium-py-3 large-py-5">
    <ToyCard v-for="toy in toys" :product="toy" :key="toy._id" />
  </section>
</template>

<style scoped>
.search-input {
  max-width: 768px;
  margin: 0 auto;
}
</style>

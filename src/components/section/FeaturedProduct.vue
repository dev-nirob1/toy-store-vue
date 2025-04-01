<script setup>
import { onMounted, ref } from 'vue';
import BaseTitle from '../element/BaseTitle.vue';
import FeaturedProductCard from '../widgets/FeaturedProductCard.vue';
const products = ref([]);
const loading = ref(false);

onMounted(async()=>{
   try {
    const response = await fetch('https://toy-store-server-blond.vercel.app/toys/features');
    const data = await response.json()
    products.value = data;
    console.log(data);
    loading.value = true;
    } catch (error) {
        console.log(error);
    }
})
console.log(products);


</script>

<template>
 <div class="container py-2 medium-py-3 large-py-4">
  <BaseTitle class="text-center">
    Featured Product
  </BaseTitle>
  <div class="medium-2 large-4 gap-1 medium-gap-2">
    <FeaturedProductCard v-for="product in products" :product="product" :key="product._id"/>
  </div>
 </div>
</template>

<style scoped>
</style>

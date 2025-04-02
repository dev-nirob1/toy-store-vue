<script setup>
import { ref } from 'vue';
import BaseTitle from '../element/BaseTitle.vue';
import CategoryProductCard from '../widgets/CategoryProductCard.vue';
const categories = ref(['Cars', 'Learn & Play', 'Cuddles', 'Dolls'])
const loading = ref(false);
const categoryData = ref([])
const handleGetCategory = async (category) => {
  try {
    const response = await fetch(`https://toy-store-server-blond.vercel.app/toys/category/${category}`);
    const data = await response.json()
    categoryData.value = data;
    // console.log(categoryData);
    loading.value = true;
  } catch (error) {
    console.log(error);
  }
}

</script>

<template>
  <section class="container py-2 medium-py-3 large-py-5">
    <BaseTitle class="text-center">
      Shop By Category
    </BaseTitle>
    <div class="tab-panel flex align-center justify-center gap-1">
      <button @click="handleGetCategory(item)" v-for="item in categories" :key="item._id">{{ item }}</button>
    </div>
    <div class="medium-2 large-3 gap-2 py-2">
      <CategoryProductCard v-for="product in categoryData" :product="product" :key="product._id"></CategoryProductCard>
    </div>
  </section>
</template>

<style scoped>
.tab-panel {
  background-color: var(--primary-color);
}

.tab-panel button {
  border: 1px solid var(--secondary-color);
  border-radius: .5rem .5rem 0 0;
  outline: none;
  color: var(--white-color)
}
</style>

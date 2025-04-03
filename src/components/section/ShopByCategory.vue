<script setup>
import { onMounted, ref, watch } from 'vue';
import BaseTitle from '../element/BaseTitle.vue';
import CategoryProductCard from '../widgets/CategoryProductCard.vue';

const loading = ref(false);
const categoryData = ref([]);
const currentCategories = ref('Cars');
const categories = ['Cars', 'Learn & Play', 'Cuddles', 'Dolls'];

const fetchCategoryData = async () => {
  try {
    loading.value = false;
    const response = await fetch(`https://toy-store-server-blond.vercel.app/toys/category/${currentCategories.value}`);
    const data = await response.json();
    categoryData.value = data;
    loading.value = true;
  } catch (error) {
    console.error('Error fetching category data:', error);
    loading.value = true;
  }
};

onMounted(fetchCategoryData);
watch(currentCategories, fetchCategoryData);
</script>

<template>
  <section class="container py-2 medium-py-3 large-py-5">
    <BaseTitle class="text-center">
      Shop By Category
    </BaseTitle>
    <div class="tab-panel flex align-center justify-center gap-1">
      <button @click="currentCategories = item" v-for="item in categories" :key="item">{{ item }}</button>
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

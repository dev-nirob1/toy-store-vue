<script setup>
import { RouterLink } from 'vue-router';
import BaseImage from '../element/BaseImage.vue';
import BaseParagraph from '../element/BaseParagraph.vue';
import SubTitle from '../element/SubTitle.vue';

defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <BaseImage :src="product.toyImage"></BaseImage>
    <div class="p-1">
      <SubTitle>{{ product.toyName }}</SubTitle>
      <div class="flex justify-between align-center">
        <BaseParagraph>Price: ${{ product.price }}</BaseParagraph>
        <span>Ratings: {{ product.ratings }}</span>
      </div>
      <RouterLink class="btn width-full bg-primary" to="/view-details">View Details</RouterLink>
    </div>
  </div>
</template>
<style scoped>
.card {
  box-shadow: var(--card-shadow);
  border-radius: 1rem 1rem 0 0;
}

.card h5 {
  margin: 10px 0;
}

.card img {
  height: 300px;
  width: 100%;
  border-radius: 1rem 1rem 0 0;
}
</style>

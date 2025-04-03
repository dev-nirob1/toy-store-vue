<script setup>
import { RouterLink } from 'vue-router';
import BaseParagraph from '../element/BaseParagraph.vue';
import SubTitle from '../element/SubTitle.vue';

defineProps({
  product: {
    type: {},
    required: true
  }
})

</script>
<template>
  <div class="toy-card text-center">
    <img class="width-full" :src="product.toyImage" alt="">
    <SubTitle>{{ product.toyName }}</SubTitle>
    <BaseParagraph>${{ product.price }}</BaseParagraph>
    <RouterLink class="btn" to="">View Details</RouterLink>
  </div>
</template>

<style scoped>
.toy-card {
  padding: .8rem;
  border-radius: .8rem;
  box-shadow: var(--card-shadow);
}
.toy-card img {
  height: 220px;
  border-radius: .8rem .8rem 0 0;
}
.toy-card h5{
  margin:10px 0;
}
</style>

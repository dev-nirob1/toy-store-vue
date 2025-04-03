<script setup lang="ts">
import BaseTitle from '@/components/element/BaseTitle.vue';

</script>

<template>
  <section class="container">
    <BaseTitle class="text-center">Add Toy</BaseTitle>
    <form>
      <div class="medium-2 gap-1">
        <div>
          <label for="seller-name">Seller Name</label>
          <input type="text" disabled placeholder="Name">
        </div>
        <div>
          <label for="email">Email Address</label>
          <input type="email" placeholder="Email">
        </div>
        <div>
          <label for="toy-name">Toy Name</label>
          <input type="text" placeholder="Toy name">
        </div>
        <div>
          <label for="toy-photo">Toy Photo URL</label>
          <input type="text" placeholder="Photo url">
        </div>
        <div>
          <label for="price">Price</label>
          <input type="text" placeholder="Price">
        </div>
        <div>
          <label for="ratings">Ratings</label>
          <input type="number" placeholder="Ratings">
        </div>
        <div>
          <label for="quantity">Quantity</label>
          <input type="number" placeholder="Quantity">
        </div>
        <div>
          <label for="quantity">Category</label>
          <input type="number" placeholder="Quantity">
        </div>
      </div>
      <div>
        <label for="description">About Toy</label>
        <textarea name="description" placeholder="About Toy" rows="4"></textarea>
      </div>
    </form>
  </section>
</template>

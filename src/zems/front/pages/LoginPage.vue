<script setup lang="ts">
import BaseButton from '@/components/element/BaseButton.vue';
import Title from '@/components/element/Title.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
  <section class="bg-light flex">

    <div class="form-container">
      <Title tag="h4">Please Login</Title>
      <form>
        <div>
          <label for="email">Email</label>
          <input id="email" type="email">
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" type="password">
        </div>
        <BaseButton class="width-full bg-primary">Login</BaseButton>
      </form>
      <BaseButton class="width-full bg-primary">Continue with google</BaseButton>
      <p>Don't have an account? <RouterLink to="/register">Register Now</RouterLink> </p>
    </div>

  </section>
</template>
<style scoped>
.form-container {
  padding: 2rem 1rem;
  max-width: 768px;
  height: fit-content;
  margin: 0 auto;
  background-color: #fff;
}
</style>

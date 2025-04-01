<script setup>

import { loginUser } from '@/plugins/firebase/firebaseAuth';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const isLoading = ref(true);
const email = ref('');
const password = ref('')
const isChecked = ref(1)

const handleLogin = async () => {
  console.log(email, password, isChecked);
  try {
    const loggedUser = await loginUser(email.value, password.value);
    console.log(loggedUser.user);
    isLoading.value = false
  } catch (error) {
    console.log('error while login', error.message);
    isLoading.value = false;
  }
}
</script>

<template>
  <section class="bg-light py-2">
    <div class="form-container">

      <BaseTitle tag="h4">Please Login</BaseTitle>

      <FormComponent @submit.prevent="handleLogin">
        <div>
          <label for="email">Email</label>
          <InputField v-model="email" id="email" type="email" placeholder="Please Enter Your Email" />
          {{ email }}
        </div>

        <div>
          <label for="password">Password</label>
          <InputField v-model="password" id="password" type="password" placeholder="Please Enter Your Password" />
          {{ password }}

        </div>
        <div class="flex">
          <InputField v-model="isChecked" value="1" name="checkbox" id='checkbox' type="checkbox" /> remember me
        </div>

        <BaseButton class="width-full bg-primary">Login</BaseButton>
      </FormComponent>
      <BaseButton class="width-full bg-primary">Continue with google</BaseButton>

      <p>
        Don't have an account? <RouterLink to="/register">Register Now</RouterLink>
      </p>
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

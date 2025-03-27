<script setup>
import BaseButton from '@/components/element/BaseButton.vue';
import InputField from '@/components/element/InputField.vue';
import Title from '@/components/element/Title.vue';
import FormComponent from '@/components/widgets/FormComponent.vue';
import { loginUser } from '@/plugins/firebase/firebaseAuth';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const isLoading = ref(true);
const email = ref();
const password = ref()

const handleLogin = async() => {
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

      <Title tag="h4">Please Login</Title>

      <FormComponent @submit.prevent="handleLogin">
        <div>
          <label for="email">Email</label>
          <InputField
          v-model="email"
          id="email"
          type="email"
          placeholder="Please Enter Your Email" />
        </div>

        <div>
          <label for="password">Password</label>
          <InputField
          v-model="password"
          id="password"
          type="password"
          placeholder="Please Enter Your Password" />
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

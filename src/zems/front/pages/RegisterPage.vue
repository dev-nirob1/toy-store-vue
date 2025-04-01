<script setup>
import { registerUser } from '@/plugins/firebase/firebaseAuth';
import { ref } from 'vue';
const isLoading = ref(true);
const name = ref()
const email = ref()
const password = ref()

const handleRegister = async () => {
  try {
    const currentUser = await registerUser(email.value, password.value)
    console.log(currentUser.user);
    isLoading.value = false;
  } catch (error) {
    console.error("Login Failed:", error.message);
    isLoading.value = false;
  }

}
</script>

<template>
  <section class="bg-light py-2">
    <div class="form-container">

      <BaseTitle tag="h4">Please Login</BaseTitle>

      <FormComponent @submit.prevent="handleRegister">
        <div>
          <label for="name">Name</label>
          <InputField v-model="name" id="name" type="text" placeholder="Please Enter Your Name" />
        </div>

        <div>
          <label for="email">Email</label>
          <InputField v-model="email" id="email" type="email" placeholder="Please Enter Your Email" />
        </div>

        <div>
          <label for="password">Password</label>
          <InputField v-model="password" id="password" type="password" placeholder="Please Enter Your Password" />
        </div>

        <BaseButton class="width-full bg-primary">Register</BaseButton>

      </FormComponent>

      <BaseButton class="width-full bg-primary">Continue with google</BaseButton>

      <p>
        Already have an account? <RouterLink to="/login">Login Here</RouterLink>
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

<script setup>
import { ref } from 'vue';

const typingName = ref('This is my Value')
const create = ref({})
const handleSubmit = (e) => {

  console.log(create.value);

}
</script>
<template>
  <form>
    <input v-model="create.name" name="name" type="text">
    {{ create.name }}
    <input v-model="create.email" type="text">
    {{ create.email }}
    <input v-model="create.password" type="text">
    <button type="submit" @click.prevent="handleSubmit">submit</button>
  </form>
</template>
<style scoped>
form {
  max-width: 500px;
  margin: 0 auto
}
</style>

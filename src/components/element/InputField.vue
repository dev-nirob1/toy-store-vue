<script setup>
defineProps({
  type: {
    type: String,
    default: "text"
  },
  id:{
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ""
  },

});
const modelValue = defineModel()

</script>
<template>
        <input v-model="modelValue" :id="id" :type="type" :placeholder="placeholder">
</template>

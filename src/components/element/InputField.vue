<script setup>
defineProps({
  // type: {
  //   type: String,
  //   default: "text"
  // },
  // id:{
  //   type: String,
  //   default: ''
  // },
  // placeholder: {
  //   type: String,
  //   default: ""
  // },

});
const modelValue = defineModel()

</script>
<template>
        <!-- <input v-bind="$attrs" v-model="modelValue" emit="$emit('update:modelValue', $event.target.value)"> -->
        <input v-bind="$attrs" v-model="modelValue">
</template>

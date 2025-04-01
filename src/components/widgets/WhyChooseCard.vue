<script setup>

defineProps({
  image: String,
  title: String,
  text: String
});
</script>
<template>
  <div class="why-choose-card text-center p-1">
    <BaseImage :image="image" />
    <BaseTitle tag="h4">
      {{ title }}
    </BaseTitle>
    <BaseParagraph>
      {{ text }}
    </BaseParagraph>
  </div>
</template>
<style>
.why-choose-card img {
  width: 5rem;
  height: auto;
}

.why-choose-card h4 {
  margin: 10px 0;
}
</style>

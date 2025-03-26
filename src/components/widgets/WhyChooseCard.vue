<script setup>
import BaseImage from '../element/BaseImage.vue';
import Paragraph from '../element/Paragraph.vue';
import Title from '../element/Title.vue';

defineProps({
  image: String,
  title: String,
  text: String
});
</script>
<template>
  <div class="why-choose-card text-center p-1">
    <BaseImage :image="image" />
    <Title tag="h4">
      {{title}}
    </Title>
    <Paragraph>
      {{text}}
    </Paragraph>
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

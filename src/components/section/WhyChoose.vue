<script setup lang="ts">
import BaseImage from '../element/BaseImage.vue';
import Paragraph from '../element/Paragraph.vue';
import Title from '../element/Title.vue';

</script>

<template>
  <section class="why-choose bg-light py-2">
    <Title class="text-center">Why Choose Us</Title>
    <div class="medium-3">
      <div class="card text-center p-1">
        <BaseImage image="/fastship.png" />
        <Title tag="h4">
          Fast Shipping
        </Title>
        <Paragraph>
          Get your toys delivered quickly and safely to your doorstep.
        </Paragraph>
      </div>
      <div class="card text-center p-1">
        <BaseImage image="/quality.png" />
        <Title tag="h4">
          Fast Shipping
        </Title>
        <Paragraph>
          Get your toys delivered quickly and safely to your doorstep.
        </Paragraph>
      </div>
      <div class="card text-center p-1">
        <BaseImage image="/customer.png" />
        <Title tag="h4">
          Fast Shipping
        </Title>
        <Paragraph>
          Get your toys delivered quickly and safely to your doorstep.
        </Paragraph>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose img {
  width: 5rem;
  height: auto;
}

.why-choose h4 {
  margin: 10px 0;
}
</style>

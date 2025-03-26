<script setup>
import Title from '../element/Title.vue';
import WhyChooseCard from '../widgets/WhyChooseCard.vue';

</script>

<template>
  <section class="why-choose bg-light py-2">
    <Title class="text-center">Why Choose Us</Title>
    <div class="medium-3">
      <WhyChooseCard
       image="/fastship.png"
       title="Fast Shipping"
        text="Get your toys delivered quickly and safely to your doorstep." />

      <WhyChooseCard
      image="/quality.png"
       title="Quality Assurance"
        text="We ensure each product meets the highest safety and quality standards." />

      <WhyChooseCard
       image="/customer.png"
        title="Customer Support"
        text="Our friendly team is here to assist you with any questions." />
    </div>
  </section>
</template>

<style scoped>

</style>

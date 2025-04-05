<script setup lang="ts">

</script>

<template>
  <section class="newsletter bg-primary container">
   <div>
    <BaseTitle>
      Stay Updated
    </BaseTitle>
    <BaseParagraph>
      Subscribe to our newsletter for the latest toys, exclusive offers, and more!
    </BaseParagraph>
    <div class="input-container flex">
      <input type="email" placeholder="Please Enter Your Email">
      <button class="btn bg-secondary">Subscribe</button>
    </div>
   </div>
  </section>
</template>

<style scoped>
.newsletter {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center
}
.input-container{
  max-width: 768px;
  margin:0 auto;
}
.input-container input{
  background-color: #fff;
}
</style>

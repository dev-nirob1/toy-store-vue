<script setup lang="ts">
import BaseParagraph from '../element/BaseParagraph.vue';
import BaseTitle from '../element/BaseTitle.vue';

</script>

<template>
  <section class="shared-banner my-5 relative">
    <img src="/banner.webp" alt="" />
    <div class="banner-content flex align-center justify-center">
      <div class="content">
        <BaseTitle>
          Contact Us
        </BaseTitle>
        <BaseParagraph class="ml-5">
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to
          reach out to us. Our team is here to assist you and ensure you have the best experience shopping at ToyStore.
        </BaseParagraph>
      </div>
    </div>
  </section>
</template>
<style scoped>
.shared-banner {
  height: 70vh;
  width: 100%;
  position: relative;
}

.shared-banner img {
  width: 100%;
  height: 100%;
}


.banner-content {
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.banner-content .content {
  max-width: 50%;
}

.banner-content .content h3 {
  margin: 10px 0;
}

.banner-content .content p {
  background: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  padding: 10px 20px;
  font-size: 20px;
  line-height: 1.3;
}
</style>

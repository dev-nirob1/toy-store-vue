<script setup>
import SharedBanner from '@/components/widgets/SharedBanner.vue';

</script>

<template>
  <div class="container">
    <SharedBanner></SharedBanner>
    <div class="medium-2 gap-2 mb-5">
      <div class="contact-info">
        <div>
          <BaseTitle>
            Get in Touch
          </BaseTitle>
          <BaseParagraph>
            We would love to hear from you. Reach out to us through the following ways
          </BaseParagraph>

          <ul>
            <ListItem>
              <i class="fa-solid fa-location-dot"></i>
              <span>123 ToyStore Avenue, ToyCity</span>
            </ListItem>
            <ListItem>
              <i class="fa-solid fa-phone-volume"></i>
              <span>(123) 456-7890</span>
            </ListItem>
            <ListItem>
              <i class="fa-solid fa-envelope"></i>
              <span>contact@toystore.com</span>
            </ListItem>
            <ListItem>
              <i class="fa-brands fa-square-facebook"></i>
              <span>/ToyStoreOfficial</span>
            </ListItem>
          </ul>
        </div>
      </div>
      <div class="form-container">
        <h2 class="text-3xl font-bold text-gray-800">Send us a Message</h2>
        <form onSubmit={handleSubmit} class="space-y-6">
          <div>
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
          </div>

          <div>
            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" required placeholder="Enter Your E-mail" />
          </div>

          <div>
            <label htmlFor="message"></label>
            <textarea id="message" name="message" rows="6" placeholder="Enter Your Message" required></textarea>
          </div>

          <button type="submit" class="btn bg-primary width-full">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contact-info ul {
  list-style: none;
  margin: 20px 0;
  padding: 0;
}

.contact-info p {
  font-size: 1.25rem;
}

.contact-info ul li {
  margin: 1rem 0;
  font-size: 1.25rem;
  padding: 0;
}

.contact-info ul li i {
  margin-right: .5rem;
}
</style>

<script setup>
import BaseParagraph from '@/components/element/BaseParagraph.vue';
import BaseTitle from '@/components/element/BaseTitle.vue';
import ListItem from '@/components/element/ListItem.vue';
import SharedBanner from '@/components/widgets/SharedBanner.vue';

</script>

<template>
   <div class="container">
    <SharedBanner></SharedBanner>
    <div class="medium-2 gap-2 mb-5">
      <div class="">
      <div class="">
        <BaseTitle>
          Get in Touch
        </BaseTitle>
        <BaseParagraph>
          We would love to hear from you. Reach out to us through the following ways
        </BaseParagraph>

        <ul class="space-y-5 mt-8">
          <ListItem>
            <p>
              <FaLocationDot size={25} />
            </p>
            <p>123 ToyStore Avenue, ToyCity</p>
          </ListItem>
          <ListItem>
            <p>
              <FaPhoneVolume size={25} />
            </p>
            <p class="ml-2">(123) 456-7890</p>
          </ListItem>
          <ListItem>
            <p>
              <SlEnvolopeLetter size={25} />
            </p>
            <p class="ml-2">contact@toystore.com</p>
          </ListItem>
          <ListItem>
            <p>
              <FaFacebookSquare size={25} />
            </p>
            <p class="ml-2">/ToyStoreOfficial</p>
          </ListItem>
        </ul>
      </div>
    </div>
      <div class="">
        <h2 class="text-3xl font-bold text-gray-800">Send us a Message</h2>
        <form onSubmit={handleSubmit} class="space-y-6">
          <div>
            <label htmlFor="name" class="block text-sm font-semibold text-gray-700"></label>
            <input
              type="text"
              id="name"
              name="name"

              placeholder="Enter Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" class="block text-sm font-semibold text-gray-700"></label>
            <input
              type="email"
              id="email"
              name="email"

              required
              placeholder="Enter Your E-mail"
            />
          </div>

          <div>
            <label htmlFor="message" class="block text-sm font-semibold text-gray-700"></label>
            <textarea
              id="message"
              name="message"
              rows="6"

              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn bg-primary width-full"
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
   </div>
</template>

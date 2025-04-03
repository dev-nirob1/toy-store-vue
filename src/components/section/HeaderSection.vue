<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const isOpen = ref(true)
const user = ref(true)
</script>

<template>
  <header class="bg-light relative">
    <nav class="container flex align-center justify-between">
      <img class="logo" src="/logo.webp" alt="logo">

      <ul class="nav-items align-center justify-center">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/all-toys">Toys</RouterLink></li>
        <li><RouterLink to="/about/page1">About</RouterLink></li>
        <li><RouterLink to="/about/page-2">About</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
      <!-- <ul v-else>
        <li><a href="/">Home</a></li>
        <li><a href="/toys">Toys</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul> -->
      <div class="flex gap-1">
        <a v-if="!user" href="/login">Login</a>
        <img v-else src="/logo.webp" alt="" class="user-profile">
        <div class="hamburger" @click="isOpen = !isOpen">
          <button>

          </button>
        </div>
      </div>


    </nav>
  </header>
</template>


<style scoped>
/* header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
} */
header .logo {
  height: 60px;
}

header ul {
  list-style: none;
}

header ul li:not(:last-child) {
  margin-right: 1rem;
}

header ul li a {
  text-decoration: none;
  padding: .5rem 1rem;
}
.nav-items{
  display: none;
}
.user-profile {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
}

.hamburger {
  display: block;
}

@media (min-width: 768px) {
  .nav-items{
    display: flex;
  }
  .hamburger {
    display: none;
  }
}
</style>

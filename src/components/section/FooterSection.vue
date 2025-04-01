<template>
  <footer class="bg-light">
    <div class="container medium-2 large-4">
      <figure>
        <img class="width-full mt-1" src="/logo.webp" alt="Toy Cars" />
      </figure>
      <div>
        <h5>Contact Us</h5>
        <p>Email: info@toycarswebsite.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Toy Street, Toyland</p>
      </div>
      <div>
        <h5>Quick Links</h5>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h5>Follow Us</h5>
        <ul class="flex gap-1 social-icon">
          <li><img src="https://www.freeiconspng.com/thumbs/facebook-icon-png/image--facebook-icon--omori-wiki-12.png"
              alt="Facebook" /></li>
          <li><img
              src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png"
              alt="instagram" /></li>
          <li><img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjq8hZUIQr6S2DpLL38yg_w6gXt9k8VHqNklCib8zBsg&s"
              alt="twitter" /></li>
        </ul>
      </div>
    </div>
    <div class="text-center">
      <p>&copy; {{ new Date().getFullYear() }} Toy Store. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

.social-icon img {
  height: 2rem;
  width: 2rem;
}
footer p {
  margin: 0;
  padding: 1rem 0;
}
</style>

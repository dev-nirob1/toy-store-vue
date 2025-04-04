<script setup>
import BaseTitle from '@/components/element/BaseTitle.vue';

</script>

<template>
  <div class="container text-center">
    <BaseTitle>My Toys</BaseTitle>
      <table>
        <thead>
          <tr>
            <th>Serial</th>
            <th>Toy Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Velocity Viper</td>
            <td>Cars</td>
            <td>$15</td>
            <td>15</td>
            <td><span>del</span><span>update</span></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Velocity Viper</td>
            <td>Cars</td>
            <td>$15</td>
            <td>15</td>
            <td><span>del</span><span>update</span></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<style scoped>
table {
  border: 1px solid #ddd;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 5rem;
}

table th {
  background-color: #f2f2f2;
  font-weight: bold;
  text-align: left;
}

table tr:not(:last-child) {
  border-bottom: 1px solid #ddd;
}

table th:not(:last-child),
table td:not(:last-child) {
  border-right: 1px solid #ddd;
}

table th, table td {
  padding: 12px 15px;
  text-align: left;
}

table td {
  vertical-align: top;
}

td span {
  margin-right: 10px;
  cursor: pointer;
  color: #0066cc;
}

td span:hover {
  text-decoration: underline;
}

</style>

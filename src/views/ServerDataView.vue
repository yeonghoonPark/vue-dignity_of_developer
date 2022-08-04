<template>
  <div>
    <div>ServerData</div>
    <button @click="getProductList">Search</button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Carhge</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in productList.data" :key="index">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.charge }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      productList: [],
    };
  },
  methods: {
    async getProductList() {
      const url =
        'https://45e0267e-d59f-4828-ad4d-ceb8c744054e.mock.pstmn.io/productList';
      this.productList = await this.api(url, 'get');
      console.log(this.productList.data);
    },
    async api(url, methods, data) {
      return await axios({
        method: methods,
        url: url,
        data: data,
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

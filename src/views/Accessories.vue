<template>
  <div class="container">
    <h2 class="page-header">Accessories</h2>
    <div class="row justify-content-around" id="addons">
      <Product class="col-10 col-md-4 my-3"
              v-for="product in accessories"
              :key="product.id"
              :id="product.id"
              :name="product.name"
              :image="product.image"
              :price="product.price"
              :type="product.product_type" />
    </div>

  </div>
</template>

<script>
  import Product from '../components/Product'

  export default {
    name: 'Accessories',
    components: {
      Product
    },
    computed: {
      products () {
        return this.$store.getters.products
      },

      accessories () {
        return this.products.filter((product) => {
            return product.product_type === "accessory";
        });
      }
    }

  }
</script>

<style>
  #addons {

  }
</style>

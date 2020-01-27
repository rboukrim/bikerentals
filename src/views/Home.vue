<template>
  <div class="container">
    <h2 class="page-header mt-4 text-center">Bikes</h2>
    <div class="row justify-content-center">
      <Product class="col-10 col-md-4 my-3"
              v-for="product in bikes"
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
    name: 'Home',
    components: {
      Product
    },
    computed: {
      products () {
        return this.$store.getters.products
      },

      bikes () {
        return this.products.filter((product) => {
            return product.product_type === "bike";
        });
      }
    }

  }
</script>

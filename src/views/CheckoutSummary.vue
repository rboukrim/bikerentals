<template>
    <div class="container">
        <h2 class="page-header mt-4 text-center">Order Summary</h2>
        <div class="row px-2">
            <div class="col-12 col-md-6">
                <div class="row justify-content-center mt-5 mb-2" v-if="!cartIsEmpty">
                    <h5 class="text-danger">Would you like to add insurance to your bike rentals?</h5>
                    <Product
                            v-for="product in addons"
                            :key="product.id"
                            :id="product.id"
                            :name="product.name"
                            :image="product.image"
                            :price="product.price"
                            :type="product.product_type" />
                </div>
            </div>
            <div class="col-12 col-md-6 my-5">
                <h5 class="text-danger" v-if="!cartIsEmpty">Place order</h5>
                <div class="row justify-content-start mb-2">
                    <ShoppingCartDetails />
                </div>
                <div class="row justify-content-center" v-if="!cartIsEmpty">
                    <button class="btn btn-primary" @click="placeOrder">Place order</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Product from '../components/Product'
    import ShoppingCartDetails from '../components/ShoppingCartDetails'

    export default {
      name: 'CheckoutSummary',
      components: {
        Product,
        ShoppingCartDetails
      },

      methods: {
        placeOrder () {
          this.$router.push({name: 'OrderConfirmation'})
          this.$store.dispatch('clearCart')
        }
      },

      computed: {
        cartIsEmpty () {
          return this.$store.getters.cartItemsCount == 0
        },

        products () {
          return this.$store.getters.products
        },

        addons () {
          return this.products.filter((product) => {
            return product.product_type === "addon";
          });
        }
      }
    }
</script>

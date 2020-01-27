<template>
    <div id="shoppingCart" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Shopping cart</h5>
                    <button class="close" data-dismiss="modal">
                        &times;
                    </button>
                </div>
                <div class="modal-body">
                    <ShoppingCartDetails />
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
                    <router-link to="/checkout-summary" class="btn btn-primary" v-if="!cartIsEmpty" data-dismiss="modal">Check out</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ShoppingCartDetails from './ShoppingCartDetails'

    export default {
      name: 'ShoppingCartModal',
      components: {
        ShoppingCartDetails
      },

      computed: {
        cartIsEmpty () {
          return this.$store.getters.cartItemsCount == 0
        }
      }

    }
</script>

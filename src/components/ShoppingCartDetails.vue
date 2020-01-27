<template>
    <div>
        <table class="table" v-if="!cartIsEmpty">
            <tr>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            <tbody>
            <tr v-for="item in cartItems" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.price | toCurrency }}</td>
                <td><ProductQuantityControl :id="item.id" /></td>
                <td>{{ item.subtotal | toCurrency }}</td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th colspan="2" class="text-right">Total cost: {{ cartTotal | toCurrency }}</th>
            </tr>
            </tbody>
        </table>
        <table class="table" v-else>
            <tbody>
            <tr>
                <td>Your cart is empty.</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import ProductQuantityControl from './ProductQuantityControl'

  export default {
    name: 'ShoppingcartDetails',

    components: {
      ProductQuantityControl
    },

    computed: {
      cartItems () {
        let cart = this.$store.getters.cart;
        let cartProducts = Object.keys(cart).map((cartItemId) => {
          return this.$store.getters.products.find((product) => {
            return cartItemId == product.id;
          });
        });

        let items = []
        for (let i = 0; i < cartProducts.length; i++) {
          let productQuantity = cart[cartProducts[i].id]
          let cartItem = {
            id: cartProducts[i].id,
            name: cartProducts[i].name,
            price: cartProducts[i].price,
            quantity: productQuantity,
            subtotal: productQuantity * cartProducts[i].price
          }
          items.push(cartItem)
        }

        return items;
      },

      cartIsEmpty () {
        return this.cartItems.length == 0
      },

      cartTotal () {
        let total = 0.00
        for (let i = 0; i < this.cartItems.length; i++) {
          total += this.cartItems[i].subtotal
        }
        return total
      }
    }

  }
</script>

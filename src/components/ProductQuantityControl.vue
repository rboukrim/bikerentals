<template>
    <div class="quantity-control w-100">
        <span class="quantity-control-button minus bg-white rounded-circle" @click="decreaseQuantity">−</span>
        <input name="quantity-number" class="quantity-number" :value="quantity" readonly="">
        <span class="quantity-control-button plus bg-white rounded-circle" @click="increaseQuantity">+</span>
    </div>
</template>

<script>
    export default {
      name: 'ProductQuantityControl',
      props: ['id'],
      methods: {
        increaseQuantity () {
          if (this.cartBikesCount == 0 && this.productType !== "bike") {
            alert("Must select bike(s) first. Then add accessories.");
          } else {
            this.$store.dispatch('updateCart', { id: this.id, quantity: 1 });
          }
        },
        decreaseQuantity () {
          if (this.cartBikesCount == 0 && this.productType !== "bike") {
            alert("Must select bike(s) first. Then add accessories.");
          } else {
            let currentQuantity = this.$store.getters.cart[this.id];
            if (currentQuantity > 0) {
              this.$store.dispatch('updateCart', { id: this.id, quantity: -1 });
            }
          }
        }
      },

      computed: {
        quantity () {
          return this.$store.getters.cart[this.id] ? this.$store.getters.cart[this.id] : 0
        },
        cartBikesCount () {
          return this.$store.getters.cartBikesCount
        },

        productType () {
          let product = this.$store.getters.products.find((product) => {
            return this.id == product.id;
          })

          return product ? product.product_type : ""
        }
      }

    }
</script>

<style>
    .quantity-control {
        position: relative;
        height: 35px;
        min-width: 80px;
        max-width: 120px;
        text-align: center;
        font-weight: bold;
        background-color: #f1f1f1;
        border: 1px solid #e81515;
        border-radius: 25px;
    }

    .quantity-control .quantity-control-button {
        position: absolute;
        top: 3px;
        z-index: 999;
        height: 28px;
        width: 28px;
        font-size: 24px;
        line-height: 28px;
        color: #444;
        font-family: Arial;
        border: 1px solid #e4e4e4;
        cursor: pointer;
    }

    .quantity-control .quantity-control-button.minus {
        left: 3px;
    }

    .quantity-control .quantity-control-button.plus {
        right: 3px;
    }

    .quantity-control input.quantity-number {
        height: 35px;
        line-height: 35px;
        background-color: transparent;
        border: 0;
        box-shadow: none;
        padding: 0;
        margin-bottom: 0;
        text-align: center;
        max-width: 120px;
        left: 0;
        width: 100%;
    }
</style>

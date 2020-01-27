<template>
    <div>
        <div class="card product-card">
            <img :src="image" :alt="name" class="card-img-top">
            <div class="card-body">
                <h4 class="card-title product-name">{{ name }}</h4>
                <div class="justify-content-around align-items-center">
                    <div class="product-price">
                        <span class="amount">{{ price | toCurrency }}</span>
                    </div>
                    <div class="product-quantity-wrapper d-inline-flex flex-column justify-content-start">
                        <div class="call-to-action mt-2">Add to Cart</div>
                        <ProductQuantityControl :id="id" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import ProductQuantityControl from './ProductQuantityControl'

  export default {
    name: 'Product',
    props: ['id', 'name', 'image', 'price', 'type'],
    components: {
      ProductQuantityControl
    }
  };
</script>

<style>
    .product-card {
        transition: all 0.25s;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15), 0 1px 5px 0 rgba(0, 0, 0, 0.13), 0 3px 1px -2px rgba(0, 0, 0, 0.25);
    }

    .product-name {
        color: #444;
    }

    .product-price {
        color: #444;
        font-weight: bold;
    }

    .product-price .dollar-sign {

    }

    .call-to-action {

    }

</style>

<template>
    <div>
        <header class="container fixed-top">
            <nav class="navbar bg-light fixed-top">
                <div class="container">
                    <router-link to="/" class="navbar-brand text-uppercase">Bike Rentals</router-link>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/" class="text-primary"><i class="fa fa-bicycle text-danger"></i> Bikes</router-link>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="text-primary" @click="viewAccessories"><i class="fa fa-cog text-danger"></i> Accessories</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item"><a href="#" data-toggle="modal" data-target="#shoppingCart" class="text-primary"><i class="fa fa-shopping-cart"></i> Cart <span class="badge badge-danger">{{ cartItemsCount }}</span></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
      name: 'Navbar',

      data () {
        return {
          showModal: false
        }
      },

      methods: {
        viewAccessories () {
          if (this.cartItemsCount == 0 || this.cartBikesCount == 0) {
              alert("Must select bike(s) first. Then add accessories.");
            } else {
              this.$router.push({name: 'Accessories'})
            }
        }
      },

      computed: {
        cartItemsCount () {
          return this.$store.getters.cartItemsCount
        },

        cartBikesCount () {
          return this.$store.getters.cartBikesCount
        }
      }

    }
</script>

<style>
    /* Top Navbar */
    .navbar-brand {
        color: #e81515;
    }

    nav ul li {
        display: inline;
    }

    nav ul a {
        color: #777777;
        text-decoration: none;
    }

    nav ul a:hover {
        color: black;
        text-decoration: none;
    }
</style>

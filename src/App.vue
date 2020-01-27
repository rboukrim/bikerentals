<template>
  <div id="app">
    <Navbar />
    <ShoppingCartModal />

    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import ShoppingCartModal from './components/ShoppingCartModal'

  export default {
    components: {
      Navbar,
      ShoppingCartModal
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .page-header {
    padding-top: 95px;
    text-align: left;
  }
</style>

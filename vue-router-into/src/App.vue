<template>
  <div id="app">
    <Header />
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>
<style>
  .content {
    width: 500px;
    margin: auto;
  }
</style>

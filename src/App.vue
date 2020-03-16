<template>
  <div class="container" id="app">
    <!-- <Login></Login> -->
    <Home></Home>
  </div>
</template>

<script>
  // import Login from './views/Login';
  import Home from './views/Home';

  export default {
    name: 'App',
    components: {
      // Login,
      Home
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rubik", "Roboto", Arial, Helvetica, sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
  }

  .container {
    width: 100%;
    height: 100%;
  }
</style>

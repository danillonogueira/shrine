<template>
  <div class="container" id="app">
    <Login></Login>
  </div>
</template>

<script>
  import Login from './views/Login';

  export default {
    name: 'App',
    components: {
      Login
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

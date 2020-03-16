<template>
  <div class="container" id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default { name: 'App' }
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

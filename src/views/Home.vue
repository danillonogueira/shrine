<template>
  <div class="home">
    <Menu></Menu>
  </div>
</template>

<script>
  import Menu from './../components/Menu';

  export default {
    components: {
      Menu
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
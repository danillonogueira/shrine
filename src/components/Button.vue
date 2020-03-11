<template>
  <div class="btn">
    <span class="btn__name">next</span>
  </div>
</template>

<script>
  export default {
  
  }
</script>

<style lang="scss" scoped>
  @import './../styles/Fonts.scss';
  @import './../styles/Functions.scss';

  .btn {
    background: color(primary-color); 
    height: 40px;
    width: 250px; 
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(5px 0, 245px 0, 250px 5px, 250px 35px, 245px 40px, 5px 40px, 0 35px, 0 5px);
    
    &__name {
      color: color(text-color);
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      font-family: "Rubik";
      user-select: none;
    }
  }

</style>
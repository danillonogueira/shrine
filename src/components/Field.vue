<template>
  <div class="input">
    <input class="input__itself" type="text" />
    <span class="input__placeholder"> 
      <slot name="content"></slot>
    </span>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @import './../styles/Fonts.scss';
  @import './../styles/Functions.scss';

  .input {
    position: relative;
    height: 60px;
    width: 350px;
    background: #FFF;
    z-index: 0;
    border-radius: 5px;
    margin: 10px 0;
    
    &__itself {
      background: transparent;
      width: 100%;
      height: 100%;
      padding: 0 8px;
      position: absolute;
      border: solid 1px gray;
      border-radius: 5px;
      outline: none;
      transition: border .2s;
      z-index: 2;
      font-size: 16px;
      color: color(text-color);

      &:focus {
        border: solid 2px color(text-primary);
      }
    }

    &__placeholder {
      position: absolute;
      font-family: "Roboto";
      font-size: 16px;
      background: #FFF;
      transform: translateY(20px) translateX(10px);
      transition-property: transform, font-size, color, z-index;
      transition-duration: .2s;
      transition-timing-function: ease-in;
      color: gray;
      padding: 0 2px;
      z-index: 1;
      text-transform: capitalize;

      &--active {
        transform: translateY(-6px) translateX(6px);
        font-size: 12px;
        color: color(text-primary);
        z-index: 2;
      }
    }
  }
</style>
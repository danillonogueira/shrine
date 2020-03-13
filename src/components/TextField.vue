<template>
  <div class="input">
    <input 
      class="input__itself" 
      :type="type"
      @focus="focused = true"
      @blur="focused = false"
      v-model="input"
    />
    <span 
      class="input__placeholder"
      :class="{ 
        'input__placeholder--overscripted': focused || input,
        'input__placeholder--dimmed': !focused,
        'input__placeholder--dark': focused
      }"
    > 
      <slot name="content"></slot>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        input: '',
        focused: false
      }
    }
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
      padding: 0 10px;
      position: absolute;
      border: solid 1.4px rgba(68, 44, 46, .3);
      border-radius: 5px;
      outline: none;
      transition: border .2s;
      transition-timing-function: ease-in;
      z-index: 2;
      font-size: 16px;
      color: color(primary-text);

      &:focus {
        border: solid 2px color(text-primary);
      }
    }

    &__placeholder {
      position: absolute;
      font-size: 16px;
      background: #FFF;
      transform: translateY(20px) translateX(10px);
      transition-property: transform, font-size, color, z-index;
      transition-duration: .2s;
      transition-timing-function: ease-in;
      padding: 0 2px;
      z-index: 1;
      text-transform: capitalize;

      &--overscripted {
        transform: translateY(-6px) translateX(10px);
        font-size: 12px;
        z-index: 2;
      }

      &--dark {
        color: color(primary-text);
      }

      &--dimmed {
        color: rgba(68, 44, 46, .6);
      }
    }
  }
</style>
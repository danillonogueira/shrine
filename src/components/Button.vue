<template>
  <div 
    class="btn"
    :class="{
      'btn--backgrounded': kind === 'backgrounded',
      'btn--large': kind === 'large'
    }"
  >
    <span class="btn__name">
      <slot name="content"></slot>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      kind: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './../styles/Fonts.scss';
  @import './../styles/Functions.scss';

  .btn {
    background: transparent;
    width: 80px; 
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    &--backgrounded {
      clip-path: clip(80px, 50px, 6px);
      background: color(primary-color); 
    }
    
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
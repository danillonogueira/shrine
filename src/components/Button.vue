<template>
  <div 
    class="btn"
    :class="{
      'btn--backgrounded': special === 'backgrounded',
      'btn--large': special === 'large'
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
      special: { type: String }
    }
  }
</script>

<style lang="scss" scoped>
  @import './../styles/Fonts.scss';
  @import './../styles/Functions.scss';

  .btn {
    background: transparent;
    width: 85px; 
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    cursor: pointer;

    &--backgrounded {
      clip-path: clip(85px, 45px, 6px);
      background: color(primary-color); 
    }
    
    &__name {
      color: color(primary-text);
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      user-select: none;
    }
  }

</style>
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
      kind: { type: String }
    }
  }
</script>

<style lang="scss" scoped>
  @import './../styles/Fonts.scss';
  @import './../styles/Functions.scss';

  .btn {
    background: transparent;
    width: 85px; 
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;

    &--backgrounded {
      clip-path: clip(85px, 50px, 6px);
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
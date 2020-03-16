<template>
  <div class="menu">
    <div class="menu__logo">
      <Logo 
        :dimensions="'40'"
        :color="'#442C2E'"
      ></Logo>
      <Title></Title>
    </div>
    <div class="menu__items">
      <span class="menu__item">all</span>
      <span class="menu__item">accessories</span>
      <span class="menu__item">clothing</span>
      <span class="menu__item">home</span>
      <span class="menu__line"></span>
      <span class="menu__item">logout</span>
    </div>
    <img 
      class="menu__icon" 
      src="./../assets/icons/search-24px.svg" 
    />
  </div>
</template>

<script>
  import Logo from './Logo';
  import Title from './Title';

  export default {
    components: {
      Logo,
      Title
    }
  }
</script>

<style lang="scss" scoped>
  @import './../styles/Fonts.scss';
  @import './../styles/Functions.scss';

  .menu {
    width: 235px;
    height: 100%;
    background: color(primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: inset -15px 0 15px rgba(68, 44, 46, .1);

    &__logo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__items {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__item {
      text-transform: uppercase;
      color: rgba(68, 44, 46, .7);
      font-weight: bold;
      letter-spacing: 1px;
      margin: 15px 0;
      cursor: pointer;

      &--selected {
        color: color(primary-text);
      }
    }

    &__line {
      height: 1px;
      width: 60px;
      background: rgba(68, 44, 46, .7);
    }

    &__icon {
      cursor: pointer;
    }
  }
</style>
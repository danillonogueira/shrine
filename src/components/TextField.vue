<template>
  <div class="input">
    <input 
      class="input__itself" 
      :type="type"
      @focus="modify('focus')"
      @blur="modify('blur')"
      v-model="input"
    />
    <span 
      class="input__placeholder"
      :class="{ 'input__placeholder--active': focused }"
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
        focused: false,
        input: ''
      }
    },
    methods: {
      modify(event) {
        const events = {
          'focus': () => {
            if (!this.input) {
              this.focused = true;
            }
          },
          'blur': () => {
            if (!this.input) {
              this.focused = false;
            }
          }
        };

        events[event]();
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
      color: rgba(68, 44, 46, .6);
      padding: 0 2px;
      z-index: 1;
      text-transform: capitalize;

      &--active {
        transform: translateY(-6px) translateX(10px);
        font-size: 12px;
        color: color(primary-text);
        z-index: 2;
      }
    }
  }
</style>
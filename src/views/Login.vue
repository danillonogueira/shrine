<template>
  <div class="login">
    <div class="login__container">
      <Logo 
        :dimensions="'40'"
        :color="'#442C2E'"
      ></Logo>
      <span class="login__title">shrine</span>
      <div class="login__controls">
        <TextField :type="'text'">
          <template v-slot:content>username</template>
        </TextField>
        <TextField :type="'password'">
          <template v-slot:content>password</template>
        </TextField>
        <div class="login__btns">
          <Button>
            <template v-slot:content>cancel</template>
          </Button>
          <Button :kind="'backgrounded'">
            <template v-slot:content>next</template>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from './../components/Button';
  import TextField from './../components/TextField';
  import Logo from './../components/Logo';

  export default {
    components: {
      Button,
      TextField,
      Logo
    }
  }
</script>

<style lang="scss" scoped>
  @import './../styles/Fonts.scss';
  @import './../styles/Functions.scss';

  .login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__title {
      font-size: 26px;
      text-transform: uppercase;
      color: color(primary-text);
      font-weight: bold;
      margin: 10px 0;
      letter-spacing: 1px;
    }

    &__controls {
      display: flex;
      flex-direction: column;
      margin: 1.5em 0;
    }

    &__btns {
      margin: 15px 0;
      display: grid;
      grid-template-columns: 3fr 1fr;
      justify-items: flex-end;
      width: 100%;
    }
  }
</style>

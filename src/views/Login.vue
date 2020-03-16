<template>
  <div class="login">
    <div class="login__container">
      <Logo 
        :dimensions="'40'"
        :color="'#442C2E'"
      ></Logo>
      <Title></Title>
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
          <Button :special="'backgrounded'">
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
  import Title from './../components/Title';

  export default {
    components: {
      Button,
      TextField,
      Logo,
      Title
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

    &__controls {
      display: flex;
      flex-direction: column;
      margin: 1.5em 0;
    }

    &__btns {
      margin: 15px 0;
      display: grid;
      grid-template-columns: 3fr 85px;
      grid-gap: 10px;
      justify-items: flex-end;
      width: 100%;
    }
  }
</style>

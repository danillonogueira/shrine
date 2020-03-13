<template>
  <div class="login">
    <div class="login__controls">
      <TextField>
        <template v-slot:content>username</template>
      </TextField>
      <TextField>
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
</template>

<script>
  import Button from './../components/Button';
  import TextField from './../components/TextField';

  export default {
    components: {
      Button,
      TextField
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__controls {
      display: flex;
      flex-direction: column;
    }

    &__btns {
      display: grid;
      grid-template-columns: 3fr 1fr;
      justify-items: flex-end;
    }
  }
</style>

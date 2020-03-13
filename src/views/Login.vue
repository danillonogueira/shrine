<template>
  <div class="login">
    <div class="login__controls">
      <Field>
        <template v-slot:content>username</template>
      </Field>
      <Field>
        <template v-slot:content>password</template>
      </Field>
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
  import Field from './../components/Field';

  export default {
    components: {
      Button,
      Field
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

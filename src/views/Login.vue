<template>
  <div class="login">
    <Field></Field>
    <Button></Button>
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
    flex-direction: column;
  }
</style>

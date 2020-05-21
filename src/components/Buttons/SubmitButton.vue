<template>
  <button type="submit" class="submit">{{ name }}</button>
</template>

<script>
  export default {
    name: "SubmitButton",
    props: {
      name: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: '',
      }
    },
  }
</script>

<style scoped lang="scss">
  .submit {
    height: 30px;
    width: 150px;
    margin-top: 25px;
    border-radius: 20px;
    border: 0;
    color: #FFF;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(to left, #F27A54, #A154F2);
    box-shadow: 0 0 10px 0 #00000075;

    &:hover {
      box-shadow: 0 0 10px 0 #ffffff3d;
    }
  }
</style>
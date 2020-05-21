<template>
  <transition name="fade" mode="in-out">
    <button class="message">{{name}}</button>
  </transition>
</template>

<script>
  export default {
    name: "SuccessMessage",
    props: {
      name: String,
    },
  }
</script>

<style scoped lang="scss">
  .message {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    height: 30px;
    width: 150px;
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
<template>
  <div class="box">
    <form>
      <div v-for="exercise in exercises" v-bind:key="exercise.id" class="exercise-block"></div>
      <label class="item1" for="exercise">Harjutus</label><input id="exercise" type="text" v-model="exerciseName"/>
      <label class="item1" for="sets">Seeriad</label><input id="sets" type="number" v-model="sets"/>
      <label class="item1" for="reps">Kordused</label><input id="reps" type=number v-model="reps"/>
      <!--      <div v-for="exercise in exercises" v-bind:key="exercise.id" class="exercise-block">
              <div class="item1">Harjutushey</div><input class="name"/>
              <div class="item1">Seeriad</div><input class="numbers" />
              <div class="item1">Kordused</div><input class="numbers"/>
            </div>-->
    </form>
  </div>
</template>

<script>
  export default {
    name: "WorkoutTable",
    data() {
      return {
        exercises: [],
        exerciseName: '',
        sets: null,
        reps: null,
      }
    },
  }
</script>

<style scoped lang="scss">
  .box {
    max-width: 445px;
    max-height: 385px;
    overflow: auto;
    width: 200px;
    height: 200px;
    border: 1px solid #FFF;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #3C444C;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #5F6265;
  }

  .exercise-block {
    display: flex;
    flex-direction: column;
    margin: 5px 10px 5px 0;
    padding: 5px 0;
    border-top: 1px solid #5F6265;
    font-size: 14px;

    &:first-child {
      border-top: 0;
    }
  }

  .item1 {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    text-align: justify;
  }

  input {
    width: 70%;
    padding: 5px 0;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-bottom: 1px solid #F27A54;
    background: transparent;
    outline: none;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  .name {
    background: transparent;
    color: #FFF;
    text-align: center;
  }

  .numbers {
    background: transparent;
    color: #F27A54;
    text-align: center;
  }

  .exercise-block .div1:last-child .numbers {
    border: 0;
  }

  @media screen and (max-width: 767px) {
    .container {
      max-width: 300px;
      max-height: 290px;
    }
  }
</style>
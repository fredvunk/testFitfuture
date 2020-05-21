<template>
  <div class="add-exercise">
    <form @submit.prevent="submitWorkout">
      <div class="heading">
        <label for="name">Kava nimi</label>
        <input
          id="name"
          type="text"
          v-model="workout_name"
        />
        <label for="day">Lihasgrupp</label>
        <input
          id="day"
          type="text"
          v-model="muscle_group"
        />
      </div>
      <button class="button-close" @click="$emit('close')">
        <font-awesome-icon class="icon" icon="times-circle"/>
      </button>
      <Exercises />
      <SubmitButton name="Lisa kava"/>
    </form>
  </div>
</template>

<script>
  import Exercises from "./Exercises";
  import SubmitButton from "../Buttons/SubmitButton";

  export default {
    name: 'AddWorkout',
    components: {
      SubmitButton,
      Exercises,
    },
    props: {
      workoutId: {
        type: Number,
      }
    },
    data () {
      return {
        workout_name: '',
        muscle_group: '',
        workouts: [],
      }
    },
    methods: {
      async submitWorkout() {
        try {
          await this.axios.post('/workouts', {
            workout_name: this.workout_name,
            muscle_group: this.muscle_group
          });
          this.$emit('workoutAdded');
          this.workout_name = '';
          this.muscle_group = '';
        } catch (err) {
          console.log(err);
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  .add-exercise {
    min-width: 300px;
    height: 100%;
    box-shadow: 0 5px 10px #000;
    padding: 10px;
    position: relative;

    .heading {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-gap: 10px;
      width: 70%;
      padding: 20px 20px 20px 0;
      text-align: justify;
      white-space: nowrap;

      input {
        width: 50%;
        background: transparent;
        border-bottom: 1px solid #F27A54;
        border-right: 0;
        border-left: 0;
        border-top: 0;
        padding: 5px;
        margin: 0;
        color: #FFF;
        font-size: 12px;
        outline: none;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }

    .button-close {
      position: absolute;
      top: 0;
      right: 0;
      border: 0;
      color: #FFF;
      background: none;
      font-size: 18px;
      padding: 6px;
      cursor: pointer;
      outline-color: #F27A54;

      .icon:hover {
        color: #F27A54;
        transition: color ease-in-out 300ms;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .add-exercise {
      max-width: 300px;
      max-height: 450px
    }
  }

  @media screen and (max-height: 568px) {
    .add-exercise {
      background: #2d2d2d;
      top: -80px;
      box-shadow: none;
    }
  }
</style>
<template>
  <div class="edit-exercise">
    <form @submit.prevent="editWorkout()">
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
      <button type="button" class="button-close" @click="$emit('close')">
        <font-awesome-icon class="icon" icon="times-circle"/>
      </button>
      <WorkoutTable/>
      <SubmitButton name="Salvesta muudatus"/>
    </form>
  </div>
</template>

<script>
  import WorkoutTable from "./Exercises";
  import SubmitButton from "../Buttons/SubmitButton";

  export default {
    name: 'EditWorkout',
    components: {
      WorkoutTable,
      SubmitButton,
    },
    props: {
      workoutId: {
        type: Number,
      },
    },
    data() {
      return {
        workout_name: '',
        muscle_group: '',
        workouts: [],
        workout: {},
      }
    },
    methods: {
      async editWorkout() {
        try {
          console.log(this.workout_name);
          console.log(this.muscle_group);
          await this.axios.put('/workouts/' + this.workoutId, {
            workout_name: this.workout_name,
            muscle_group: this.muscle_group
          });
          this.$emit('workoutEdit');
          this.workout_name = '';
          this.muscle_group = '';
        } catch (err) {
          console.log(err);
        }
      },
    },
    async created() {
      try {
        const workout = await this.axios.get('/workouts/' + this.workoutId)
        this.workout = workout.data
        this.workout_name = workout.data.workout_name
        this.muscle_group = workout.data.muscle_group
      } catch (err) {
        console.log(err);
      }
    },
  }
</script>

<style scoped lang="scss">
  .edit-exercise {
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
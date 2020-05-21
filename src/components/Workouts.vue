<template>
  <div class="content">
    <div class="workouts">
      <h3>Kavad</h3>
      <button
        @click="isActive = !isActive"
        :class="{'active': isActive}"
        class="workouts-button"
      >
        <font-awesome-icon class="icon" icon="plus-circle"/>
      </button>
      <SuccessMessage name="Kava muudetud" v-if="savingSuccessful"/>
      <div class="workouts-list" v-for="workout in workouts.data" v-bind:key="workout.id">
        <div class="workouts-item">{{workout.workout_name}}</div>
        <div class="edit-buttons">
          <button @click="workoutId = workout.id" class="icon-button">
            <font-awesome-icon class="icon" icon="pencil-alt"/>
          </button>
          <button @click="deleteWorkout(workout.id)" class="icon-button">
            <font-awesome-icon class="icon" icon="trash-alt"/>
          </button>
        </div>
      </div>
      <AddWorkout
        v-if="isActive"
        @close="isActive = false"
        @workoutAdded="getWorkouts"
      />
      <EditWorkout
        v-if="workoutId"
        @close="closeEdit"
        @workoutEdit="workoutModified"
        :workoutId="workoutId"
      />
    </div>
  </div>
</template>

<script>
  import AddWorkout from './AddWorkout/AddWorkout';
  import EditWorkout from "./AddWorkout/EditWorkout";
  import SuccessMessage from "./Buttons/SuccessMessage";

  export default {
    name: "Workouts",
    components: {
      EditWorkout,
      AddWorkout,
      SuccessMessage,
    },
    data() {
      return {
        workouts: [],
        isActive: false,
        workoutId: null,
        closeModal: null,
        savingSuccessful: false,
      }
    },
    methods: {
      async getWorkouts() {
        try {
          this.workouts = await this.axios.get('/workouts');
          this.workoutId = null;
        } catch (err) {
          console.log(err);
          await this.$router.push({name: 'Login'});
        }
      },
      async workoutModified() {
        try {
          await this.axios.get('/workouts');
          this.workoutId = null;
          this.showSuccessMessage();
        } catch (err) {
          console.log(err);
          await this.$router.push({name: 'Login'});
        }
      },
      async deleteWorkout(workoutId) {
        try {
          //TODO korralik confirm message
          if (confirm('Oled kindel, et soovid kava kustutada?'))
            await this.axios.delete('/workouts/' +workoutId);
            await this.getWorkouts();
        } catch (err) {
          console.log(err);
          await this.$router.push({name: 'Login'});
        }
      },
      closeEdit() {
        this.workoutId = null;
      },
      showSuccessMessage() {
        this.savingSuccessful = true;

        setTimeout(() => {
          this.savingSuccessful = false;
        }, 1000);
      },
    },
    created() {
      this.getWorkouts();
    },
  }
</script>

<style scoped lang="scss">
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .workouts {
    text-align: center;

    h3 {
      margin-bottom: 0;
    }

    &-list {
      display: flex;
      justify-content: center;
    }

    &-item {
      padding: 5px;
      cursor: pointer;
      border: 1px solid black;
      min-width: 100px;
    }

    &-button {
      cursor: pointer;
      background: transparent;
      border: 0;
      color: #FFF;
      padding: 10px;
      margin-bottom: 5px;
      font-size: 20px;
      outline: 0;

      .icon:hover {
        color: #F27A54;
        transition: 300ms;
      }
    }
  }

  .edit-buttons {

    .icon-button {
      background: transparent;
      border: 0;
      color: #FFF;
      cursor: pointer;
      padding: 8px 5px;

      &:first-child:hover {
        transition: color 300ms;
        color: #00A917;
      }

      &:last-child:hover {
        transition: color 300ms;
        color: #FF000D;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
<template>
  <div class="container">
    <WorkoutDiary @onEdit="showEdit"/>
    <WorkoutDiaryDetails v-if="detailsId || detailsId === 0" @childClose="closeDetails"/>
    <div class="logo1">
    </div>
  </div>
</template>

<script>
  import WorkoutDiary from "./WorkoutDiary/WorkoutDiary.vue";
  import WorkoutDiaryDetails from "./WorkoutDiary/WorkoutDiaryDetails";

  export default {
    name: "Home",
    components: {
      WorkoutDiary, WorkoutDiaryDetails,
    },
    props: {
      id: {
        type: Number,
      },
    },
    data () {
      return {
        detailsId: null,
        isOpen: false,
      }
    },
    methods: {
      showEdit(value) {
        this.detailsId = value;
      },
      closeDetails() {
        this.detailsId = null;
      },
    },
  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    justify-content: center;
  }

  .workout-details {
    position: fixed;
  }
</style>
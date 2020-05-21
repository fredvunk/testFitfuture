<template>
  <div class="workout-details">
    <div class="header">Kava nimi{{ heading }}</div>
    <form>
      <div class="numbers">Raskus<input type="number"/></div>
      <div class="numbers">Kordused<input type="number"/></div>
      <div class="numbers">Harjutus
        <div class="exercise-name">{{ exerciseName }}</div>
      </div>
      <div class="action-buttons">
        <SubmitButton name="Salvesta"/>
        <SubmitButton name="Kustuta"/>
      </div>
    </form>
    <button class="button-close" @click="$emit('childClose')">
      <font-awesome-icon class="icon" icon="times-circle"/>
    </button>
    <div class="table-position">
      <table>
        <thead>
        <tr>
          <th>Seeriad</th>
          <th>Kordused</th>
          <th>Raskus</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><input type="number"/></td>
          <td><input type="number"></td>
          <td><input type="number"></td>
          <td class="img">
            <button>
              <font-awesome-icon class="icon" icon="pencil-alt"/>
            </button>
            <button>
              <font-awesome-icon class="icon" icon="trash-alt"/>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import SubmitButton from "../Buttons/SubmitButton";

  export default {
    components: {
      SubmitButton,
    },
    props: {
      heading: {
        type: String,
        default: '',
      },
      exerciseName: {
        type: String,
        default: 'Rippes jalgadetõsted',
      },
      sets: {
        type: Number,
        default: 0,
      },
      reps: {
        type: Number,
        default: 0,
      },
      weight: {
        type: Number,
        default: 0,
      }
    },
    data () {
      return {
        allReps: [],
        allWeights: [],
      }
    },
    methods: {
      saveInput() {
        this.reps.push(this.allReps);
        this.weight.push(this.allWeights);
      },
      deleteInput() {

      }
    }
  }
</script>

<style scoped lang="scss">
  .workout-details {
    width: 290px;
    height: 300px;
    margin-top: 40px;
    background: #3C444C;
    overflow: auto;
    text-align: center;
    border: 1px solid #EEE;
    box-shadow: 0 2px 3px #CCC;
  }

  .header {
    margin-top: 5px;
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

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  .numbers {
    display: flex;
    justify-content: space-between;
    padding: 2px 25px;

    .exercise-name {
      padding-left: 10px;
    }

    input {
      width: 60px;
      margin-left: 25px;
      background: transparent;
      border-bottom: 1px solid #F27A54;
      border-right: 0;
      border-left: 0;
      border-top: 0;
      outline: none;
      color: #FFF;
      text-align: center;
    }
  }

  .table-position {
    display: flex;
    justify-content: center;
    margin: 5px 0 0 20px;
  }

  table {
    border-collapse: collapse;

    input {
      width: 50px;
      background: transparent;
      border-bottom: 0;
      border-right: 0;
      border-left: 0;
      border-top: 0;
      padding: 5px;
      margin: 0;
      color: #F27A54;
      font-size: 12px;
      outline: none;
      text-align: center;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      &::after {
        content: '';
        border-bottom: 1px solid #F27A54;
        width: 50%;
        height: 1px;
        position: absolute;
      }
    }
  }

  thead {
    font-size: 12px;
  }

  td:first-child, td:nth-child(2), td:nth-child(3) {
    border-right: 1px solid #5F6265;
  }

  td:first-child {
    border-left: 1px solid #5F6265;
  }

  .action-buttons {
    display: flex;
    justify-content: space-evenly;

    & button {
      width: 90px;
      margin-top: 5px;
    }
  }

  .img {
    display: flex;
    font-size: 10px;

    button {
      background: transparent;
      border: 0;
      color: #FFF;
      cursor: pointer;
      padding: 8px 5px;

      &:first-child:hover {
        transition: color 300ms;
        color: #00a917;
      }

      &:last-child:hover {
        transition: color 300ms;
        color: #FF000D;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .container {
      max-width: 310px;
    }
  }
</style>
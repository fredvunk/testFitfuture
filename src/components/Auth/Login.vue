<template>
  <div id="log-in">
    <div class="log-in-form">
      <form @submit.prevent="onLogin">
        <div class="input">
          <label for="email">E-Mail</label>
          <input
            type="email"
            id="email"
            v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Login",
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async onLogin() {
        try {
          await this.axios.post('/login', {
            email: this.email,
            password: this.password,
          });
          await this.$router.push({name: 'Home'});
        } catch (err) {
          console.log(err);
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  .log-in-form {
    width: 250px;
    margin: 30px auto;
    border: 1px solid #EEE;
    padding: 20px;
    box-shadow: 0 2px 3px #CCC;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #FFF;
    margin-bottom: 6px;
  }

  .input input {
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border-bottom: 1px solid #F27A54;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    background: transparent;
    color: #FFF;
  }

  .input input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.1);
  }

  .submit {
    text-align: center;

    button {
      color: #FFF;
      border: 0;
      border-radius: 20px;
      padding: 5px 20px;
      cursor: pointer;
      background: linear-gradient(to left, #F27A54, #A154F2);
      font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    }
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #CCC;
    background-color: transparent;
    color: #CCC;
    cursor: not-allowed;
  }
</style>
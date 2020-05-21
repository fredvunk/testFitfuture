t<template>
  <div class="signup">
    <div class="signup-form">
      <form @submit.prevent="onSignUp">
        <div class="input">
          <label for="email">E-mail</label>
            <input
              type="email"
              id="email"
              @input="$v.email.$touch()"
              v-model="email"
              autocomplete="off"
            >
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            autocomplete="off"
          >
        </div>
        <div class="submit">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
    <div class="container-svg"><img src="../../../public/img/group21.svg" alt="logo" class="signup-logo"></div>
    <div v-if="windowWidth <= 359"><img src="../../../public/img/group21mobile.svg" alt="logo" class="logo-mobile">
    </div>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators';

  export default {
    name: "SignUp",
    data () {
      return {
        email: '',
        password: '',
        windowWidth: 0,
      }
    },
    validations: {
      email: {
        required,
        email
      }
    },
    methods: {
      async onSignUp() {
        try {
          await this.axios.post('/signup', {
            email: this.email,
            password: this.password
          });
          await this.$router.push({name: 'Login'});
        } catch (err) {
          console.log(err);
        }
      },
      getWindowWidth() {
        this.windowWidth = document.documentElement.clientWidth;
      },
    },
    mounted() {
      this.$nextTick(function () {
        window.addEventListener('resize', this.getWindowWidth);
        this.getWindowWidth();
      });
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.getWindowWidth);
    }
  }
</script>

<style scoped lang="scss">
  .signup {
    position: relative;

    .container-svg {
      display: flex;
      justify-content: center;
    }

    &-logo {
      display: block;
      margin: -90px auto;
      transform: scale(1);
    }

    .logo-mobile {
      position: absolute;
      top: 140px;
      right: 0;
      margin-top: 114px;
    }
  }

  .signup-form {
    width: 250px;
    margin: 30px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 20px;
    position: relative;
  }

  .input {
    margin: 10px auto;
    background: transparent;
  }

  .box1 {
    width: 400px;
    height: 150px;
  }

  .box2 {
    width: 400px;
    height: 150px;
  }

  .svg-right {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

  }

  .svg-left {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

  }

  .input label {
    display: block;
    color: #FFF;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border-bottom: 1px solid #F27A54;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    background: transparent;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.1);
  }

  .input select {
    border: 1px solid #ccc;
  }

  .submit {
    text-align: center;

    button {
      border: 0;
      border-radius: 20px;
      color: #FFF;
      padding: 10px 20px;
      cursor: pointer;
      margin: 0 auto;
      background: linear-gradient(to left, #F27A54, #A154F2);
      box-shadow: 0 0 10px 0 #00000075;
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
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }

  @media screen and (max-width: 767px) {
    .signup-logo {
      display: block;
      margin: -90px auto;
      transform: scale(0.7);
    }
  }

  @media screen and (max-width: 426px) {
    .signup-logo {
      transform: scale(0.5);
    }
  }

  @media screen and (max-width: 380px) {
    .signup-logo {
      transform: scale(0.47);
    }
  }

  @media screen and (max-width: 359px) {
    .signup-logo {
      display: none;
    }
  }


</style>
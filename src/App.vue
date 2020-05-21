<template>
  <div id="app">
    <div class="mobile-header">
      <Profile/>
      <div class="logo-name">Fit Future</div>
    </div>
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Profile from './components/UserProfile/Profile';

  export default {
    name: 'App',

    components: {
      Header,
      Profile,
    },
    data: function () {
      return {
        activeDropdown: false,
      }
    },
    methods: {
      toggleDropdown(e) {
        e.stopPropagation();
        this.activeDropdown = !this.activeDropdown;
        if (this.activeDropdown) {
          window.addEventListener('click', () => {
            this.activeDropdown = false
          })
        } else {
          window.removeEventListener('click', () => {
            this.activeDropdown = false
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    background-color: #3C444C;
  }

  .mobile-header {
    display: none;
  }

  @media screen and (max-width: 767px) {
    #app {
      height: calc(100vh - 52px);
    }

    .mobile-header {
      height: 39px;
      display: flex;
      list-style: none;
      background: #F27A54;

      .logo-name {
        align-items: center;
        display: flex;
        flex-grow: 1;
      }

      .active-dropdown {
        display: inline-block;
        position: absolute;
        width: 150px;
        height: 100%;
        top: 39px;
        left: 0;
        z-index: 10;

        & ul {
          background: #F27A54;
          list-style: none;
          width: 100%;
          padding: 0;
          margin: 0;

          .links {
            border-top: 1px solid #5F6265;
            padding: 10px;
          }
        }
      }

      button {
        background: none;
        border: 0;
        color: #FFF;
        padding: 12px;
        outline: 0;
      }
    }
  }

  .slide-fade-enter-active {
    transition: all 300ms ease;
  }

  .slide-fade-leave-active {
    transition: all 300ms cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
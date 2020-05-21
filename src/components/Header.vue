<template>
  <div class="menu">
    <ul>
      <router-link to="/" tag="li" exact active-class="active">
        <a><span class="icon-container"><font-awesome-icon icon="home"/></span>Ülevaade</a>
      </router-link>

      <router-link to="/workouts" tag="li" exact active-class="active">
        <a><span class="icon-container"><font-awesome-icon icon="folder-open"/></span>Kavad</a>
      </router-link>

      <router-link to="/exercise" tag="li" exact active-class="active">
        <a><span class="icon-container"><font-awesome-icon icon="dumbbell"/></span>Harjutused</a>
      </router-link>

      <router-link to="/login" tag="li" exact active-class="active">
        <a><span class="icon-container"><font-awesome-icon icon="user-cog"/></span>Logi välja</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Header",
  };
</script>

<style scoped lang="scss">

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    width: 100%;
    background: #3C444C;
    box-shadow: 0 0 10px #000;
    font-size: 14px;
    height: 50px;

    ul {
      padding: 0;
      margin: 0;

      li {
        position: relative;
        display: inline-block;
        width: 115px;
        list-style: none;
        text-align: center;
        border-right: 1px solid #000;

        &:last-child {
          border: none;
        }

        span {
          display: flex;
          justify-content: center;
        }
      }

      li:hover {
        background: rgba(255, 255, 255, 0.16);
        transition: background 300ms;
      }

      .active a::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 1px;
        width: 100%;
        height: 1px;
        background: linear-gradient(to left, #F27A54, #A154F2);
        border-radius: 5px;
        transition: background ease 600ms;
      }
    }

    a:visited, a {
      text-decoration: none;
      color: #FFF;
      display: block;
      padding: 10px;
    }
  }

  @media screen and (max-width: 767px) {
    .menu {
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 52px;

      ul {
        display: flex;
        justify-content: center;

        li:first-child, li:nth-child(2), li:nth-child(3) {
          width: 100%;
        }

        li:nth-child(3) {
          border-right: 0;
        }

        li:last-child {
          display: none;
        }
      }
    }
  }
</style>

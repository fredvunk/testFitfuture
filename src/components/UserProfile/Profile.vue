<template>
  <div class="user">
    <button id="dropdown" class="user-settings" @click="toggleDropdown">
      <span class="icon-container"><font-awesome-icon icon="user-cog"/></span>
    </button>
    <transition name="slide-fade">
      <div v-if="activeDropdown" :class="{'active-dropdown': activeDropdown}">
        <ul>
          <li>
            <div class="links" @click="onLogout">Log out</div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'Profile',

    data () {
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
      },
      async onLogout() {
        try {
          await this.axios.post('/logout');
          await this.$router.push({name: 'Login'});
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .user {
    display: flex;
    width: 39px;
    flex: 1;
  }
</style>
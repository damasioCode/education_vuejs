<script setup>
import { RouterLink } from 'vue-router'

// export default {}
</script>

<template>
  <header class="navmenu">
    <div class="navmenu__wrapper container">

      <RouterLink to="/" class="navmenu__brand">
        <div class="logo">
          <img
            alt="Vue logo"
            src="@/assets/logo.svg"
          />
        </div>
        TheStudents
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
  .navmenu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: .5rem 0;
    background: #FFF;
    border-bottom: 1px solid #15d160;
    box-shadow: 0 0 20px rgba(10, 10, 10, 0.1);
  }
  .navmenu__brand {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .navmenu__brand .logo {
    max-width: 40px;
    flex: 1;
  }
  .navmenu__brand {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.25rem;
    color: #2e2e2e
  }
</style>

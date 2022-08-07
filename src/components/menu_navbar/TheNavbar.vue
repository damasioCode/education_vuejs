<script setup>

// export default {}
</script>

<template>
  <header class="navmenu">
    <div class="navmenu__wrapper container">

      <div class="navmenu__brand">
        <div class="logo">
          <img
            alt="Vue logo"
            src="@/assets/logo.svg"
          />
        </div>
        <h2>TheStudents</h2>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .navmenu {
    position: fixed;
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
  .navmenu__brand h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }
</style>

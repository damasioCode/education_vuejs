<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/menu_navbar/TheNavbar.vue'
import StudentsContainer from './components/list_students/StudentsContainer.vue';
</script>

<template>

  <TheNavbar />
  
  <StudentsContainer />
  <RouterView />
</template>


<style scoped>

</style>

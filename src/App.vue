<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/menu_navbar/TheNavbar.vue'
import LoadingScreen from './components/loading/LoadingScreen.vue';
import { ref, watchEffect } from 'vue'
</script>

<template>
  <TheNavbar />
  <RouterView />
</template>

<script setup>
import StudentsRow from './StudentsRow.vue';
// export default {}
</script>

<template>
  <section class="student">
    <ul class="student__wrapper container">
      <StudentsRow />
      <StudentsRow />
      <StudentsRow />
      <StudentsRow />
      <StudentsRow />
      <StudentsRow />
    </ul>
  </section>
</template>

<style scoped>
.student {
  margin-top: 4rem;
}
.student__wrapper {
  
}
</style>

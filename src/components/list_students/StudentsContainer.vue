<script setup>
import StudentsRow from './StudentsRow.vue';
import StudentsHeader from './StudentsHeader.vue';
import { ref, watchEffect } from 'vue'
import { getAllStudents } from '@/services/api.js'

// const props = defineProps(['isLoading'])
const isLoading = ref(false)
const studentsData = ref({})

watchEffect(async () => {
  isLoading.value = true
  studentsData.value = await getAllStudents()
  isLoading.value = false
})


</script>

<template>
  <section class="student">
    <ul class="student__wrapper container">
      <StudentsHeader v-if="!isLoading" />
      <StudentsRow 
        v-for="data in studentsData.results"
        :key="data.id"
        :info="data"
      />
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

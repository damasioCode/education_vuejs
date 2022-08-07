<script setup>
import StudentsRow from './StudentsRow.vue';
import { onMounted, ref, watchEffect } from 'vue'
import { getAllStudents } from '@/services/api.js'

const studentsData = ref({})

// const props = defineProps([''])

const fetchStudents = async () => {
  try{
    const studentsData = await getAllStudents()
    const resolveStudents = await new Promise( resolve => resolve(studentsData) )
    return resolveStudents
  } catch(error) { 
    console.log(error)
  }
}
onMounted( () => { 
  ( async () => {
    await Promise.resolve(fetchStudents())
      .then((data) => {
        studentsData.value = data
      })
  })()

})
watchEffect(async () => {
  // this effect will run immediately and then
  // re-run whenever currentBranch.value changes
  const API_URL = 'https://secret-fjord-29410.herokuapp.com/api/v1'
  studentsData.value = await (await fetch(`${API_URL}/students`)).json()
  console.log(studentsData.value);
})


</script>

<template>
  <section class="student">
    <ul class="student__wrapper container">
      <button @click="count++">{{ count }}</button>
      <button @click="count++">{{ count }}</button>
      <button @click="count++">{{ count }}</button>
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

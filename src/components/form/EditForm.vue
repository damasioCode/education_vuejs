<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps(['ra'])


const student = ref({})

watchEffect(async () => {
  const API_URL = 'https://secret-fjord-29410.herokuapp.com/api/v1'
  let fetchStudents = await fetch(`${API_URL}/students/${props.ra}`)
  student.value = await fetchStudents.json();
})

const onSubmit = async (event) => {
  // const formData = new FormData(event.target)
  
}
</script>

<template>
  <form method="POST" v-on:submit.prevent="onSubmit">
    <input type="text" name="name" :value="student.name">
    <input type="text" name="name" :value="student.email">
    <input type="text" name="name" :value="student.ra">
    <input type="text" name="name" :value="student.cpf">
    <button type="submit">Update</button>
  </form>
</template>

<style scoped>
  .student__row {
    transition: .2s all ease-in-out;
  }
  .student__row {
    background-color: #dadada;
  }
  .student__row .student__column li {
    padding: 1rem;
  }
  .student__row .student__column li:hover {
    background-color: #cccccc;
  }

  .student__column{
    display: grid;
    grid-template-columns: 100px 1fr 150px 210px;
    /* gap: .5rem; */
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
  }
  .actions button {
    flex: 1;
    cursor: pointer;
    padding: .5rem 1rem;
    color: #FFF;
    border-radius: 4px;
    flex-wrap: wrap; 
  }

  @media (max-width: 700px) {
    .student__column{
       grid-template-columns: 1fr 80px;
    }
    
    .student__column li {
      grid-column-start: 1;
    }
    .student__column li:last-child{
      grid-column-start: 2;
      grid-row-start: 1;
      grid-row: 1/3;
    }
  }
</style>

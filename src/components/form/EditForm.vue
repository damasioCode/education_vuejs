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
  const formData = new FormData(event.target)
  console.log(formData)
}
</script>

<template>
  <form class="form" method="POST" v-on:submit.prevent="onSubmit">
    <div class="input__box">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" :value="student.name">
    </div>
    <div class="input__box">
      <label for="name">Email</label>
      <input type="text" name="email" id="email" :value="student.email">
    </div>
    <div class="input__box">
      <label for="name">RA</label>
      <input type="text" readonly :value="student.ra">
    </div>
    <div class="input__box">
      <label for="name">CPF</label>
      <input type="text" readonly :value="student.cpf">
    </div>
    <button class="submit" type="submit">Update</button>
  </form>
</template>

<style scoped>
  .student__row {
    transition: .2s all ease-in-out;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  form .submit {
    max-width: 180px;
    width: 100%;
    padding: 1rem;
    border-radius: 4px;
    margin-left: auto;
    cursor: pointer;
    background: #15d160;
    font-weight: 600;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    
  }
  .input__box {
    flex: 1;
    gap: .2rem;
  }

  /* .input__box label {
    
  } */
  .input__box input {
    width: 100%;
    margin-top: 6px;
    margin-bottom: 6px;
    border: 1px solid #CECECE;
    box-shadow: 0 10px 10px rgba( 130, 130, 130, 0.08);
    padding: .75rem;    
    border-radius: 4px;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }
  textarea:focus, input:focus{
    outline: none;
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

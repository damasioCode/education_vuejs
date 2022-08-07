<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['info'])
</script>

<template>
  <li class="student__row">
    <ul class="student__column">
      <li>{{props.info.ra}}</li>
      <li>{{props.info.name}}</li>
      <li>{{props.info.cpf}}</li>
      <li class="actions">
        <RouterLink :to="{name : 'edit', params: {ra: props.info.ra}}" class="edit">Edit</RouterLink>
        <button class="delete">Delete</button>
      </li>
    </ul>
  </li>
</template>

<style scoped>
  .student__row {
    padding: 1rem;
    transition: .2s all ease-in-out;
  }
  .student__row:nth-child(even) {
    background-color: #f7f7f7;
  }
  .student__row:hover {
    background-color: #f1f1f1;
  }

  .student__column{
    display: grid;
    grid-template-columns: 90px 1fr 140px 180px;
    gap: .5rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
  }
  .actions button,
  .actions a {
    display: block;
    font-family: 'Montserrat', sans-serif;
    flex: 1;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    padding: .5rem 1rem;
    color: #FFF;
    border-radius: 4px;
    flex-wrap: wrap; 
  }

  .actions button.edit,
  .actions a.edit {
    background: #1460D1;
  }
  .actions button.delete {
    background: #D11460;
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

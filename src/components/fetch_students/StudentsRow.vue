<script setup>
// export default {}
</script>

<template>
  <li class="student__row">
    <ul class="student__column">
      <li>101235</li>
      <li>Paula Souza</li>
      <li>121.999.999-99</li>
      <li>
        <button>Editar</button>
        <button>Excluir</button>
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
    grid-template-columns: repeat(3, 1fr) 120px;
  }
</style>

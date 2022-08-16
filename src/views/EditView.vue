<script setup>
  import EditForm from '@/components/form/EditForm.vue';
  import { RouterLink } from 'vue-router'
</script>
<template>
  <section class="container edit">
    <RouterLink to="/" class="navmenu__brand">
      Return
    </RouterLink>
    <div>
      <h1>Update student</h1>
    </div>
    <EditForm :ra="$route.params.ra" />
  </section>
  
</template>

<style scoped>
  .edit {
    margin-top: 4rem;
    /* max-width: 130px; */
  }

  .edit h1 {
    margin-bottom: .5rem;
  }
</style>

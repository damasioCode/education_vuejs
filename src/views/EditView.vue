<script setup>
  import EditForm from '@/components/form/EditForm.vue';
</script>
<template>
  <div class="edit">
    <h1>This is an about page</h1>
  </div>
  <EditForm :ra="$route.params.ra" />
  
</template>

<style scoped>
  .edit {
    margin-top: 4rem;
  }
</style>

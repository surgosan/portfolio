<template>
    <div class="container">
      <p>{{ msg }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    msg: String
  });
  </script>
  
  <style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  </style>
  
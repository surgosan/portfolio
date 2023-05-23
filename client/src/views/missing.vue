<script setup>
  import { RouterView } from 'vue-router';
</script>

<template>
    <main>
        <h1>Uh oh, I think we're lost!</h1>
        <h1>Let's go back.</h1>
        <RouterLink to="/" class="link">Return</RouterLink>
    </main>
</template>

<style scoped>

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
    a.link {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 135px;
      aspect-ratio: 3/1;
      border: solid 1px var(--color-heading);
      border-radius: 5px;
      background-color: var(--color-background-mute);
      color: var(--color-heading);
      text-decoration: none;
      transition: .4s;
    }

    a.link:hover {
      border: solid 1.5px var(--color-theme);
      background-color: var(--color-background-soft);
    }

    h1 {
        color: var(--color-heading);
    }
</style>
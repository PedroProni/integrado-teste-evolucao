<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <img alt="Integrado" class="logo" src="./assets/logo-branca.png" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  padding: 1.5rem 0;
  background: var(--dark-light)
}

header div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>🧠 Mental Health Companion</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/breathing">Breathing</RouterLink>
        <RouterLink to="/wellness">Wellness</RouterLink>
        <RouterLink to="/ai-support">AI Support</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  background-color: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

nav {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983; /* Green color for the active page */
}

main {
  padding: 2rem;
}
</style>
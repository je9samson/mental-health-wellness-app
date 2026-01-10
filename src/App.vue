<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="sage-container">
    <header class="navbar">
      <div class="navbar-content">
        <div class="logo-section">
          <span class="leaf-icon">🌿</span>
          <h1>Wellness Companion</h1>
          <span class="leaf-icon">🌿</span>
        </div>
        
        <nav class="nav-links">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/breathing" class="nav-link">Breathing</RouterLink>
          <RouterLink to="/wellness" class="nav-link">Wellness</RouterLink>
          <RouterLink to="/ai-support" class="nav-link">AI Support</RouterLink>
        </nav>
      </div>
    </header>

    <main class="content-area">
      <div class="page-card">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.sage-container {
  min-height: 100vh;
  background-color: #f7f9f7;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: white;
  border-bottom: 1px solid #e0e7e0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 0; /* Slightly more padding for the larger logo */
}

.navbar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* BIGGER LOGO TEXT */
.logo-section h1 {
  font-size: 2.2rem; /* Increased from 1.6rem */
  color: #4a5d4a;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.leaf-icon {
  font-size: 1.8rem;
}

/* NAVIGATION BOXING */
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px; 
  white-space: nowrap;
}

.nav-link {
  text-decoration: none;
  color: #7a8d7a;
  font-weight: 500;
  padding: 8px 16px;
  transition: 0.3s;
  border-radius: 12px;
  border: 1px solid transparent;
}

.nav-link:hover {
  background-color: #f0f4f0;
  color: #4a5d4a;
}

/* BOX EFFECT FOR ALL ACTIVE LINKS (Including AI Support) */
.router-link-exact-active {
  background-color: #e8eee8 !important;
  border: 1px solid #8da399 !important;
  color: #4a5d4a !important;
}

.content-area {
  flex: 1;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

.page-card {
  background: white;
  width: 90%;
  max-width: 650px;
  padding: 50px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(141, 163, 153, 0.15);
  text-align: center;
}

:deep(h1) {
  color: #4a5d4a;
  margin-bottom: 15px;
  font-weight: 500;
}

:deep(p) {
  color: #6b7c6b;
  line-height: 1.7;
}
</style>
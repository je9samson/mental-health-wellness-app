<template>
  <div class="home-container">
    <section class="hero">
      <div class="hero-badge">Mindfulness & Peace</div>
      <h1>Your Journey to <span class="highlight">Wellness</span> Starts Here</h1>
      <p>Take a moment for yourself. Explore our tools designed to help you breathe, relax, and find support whenever you need it.</p>
    </section>

    <div class="features-grid">
      
      <RouterLink to="/breathing" class="feature-link">
        <div class="feature-card">
          <div class="icon">🫁</div>
          <h3>Breathing</h3>
          <p>Calm your mind with guided rhythmic exercises.</p>
        </div>
      </RouterLink>

      <RouterLink to="/wellness" class="feature-link">
        <div class="feature-card">
          <div class="icon">🍃</div>
          <h3>Wellness</h3>
          <p>Daily tips and habits for a healthier lifestyle.</p>
        </div>
      </RouterLink>

      <RouterLink to="/ai-support" class="feature-link">
        <div class="feature-card">
          <div class="icon">🤖</div>
          <h3>AI Support</h3>
          <p>A safe space to talk and get instant encouragement.</p>
        </div>
      </RouterLink>

    </div>
  </div>
</template>

<style scoped>
/* ... (Keep your existing styles from the previous message) ... */

/* Add these to handle the new RouterLinks */
.feature-link {
  text-decoration: none; /* Removes the default blue underline */
  color: inherit;        /* Keeps the text color the same as defined in the card */
  display: block;
}

.feature-card {
  cursor: pointer; /* Shows the "hand" icon when hovering */
  background: #fdfdfd;
  padding: 25px;
  border-radius: 20px;
  border: 1px solid #f0f4f0;
  transition: all 0.3s ease;
  text-align: center;
  height: 100%; /* Ensures all cards are the same height */
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(141, 163, 153, 0.15);
  border-color: #8da399; /* Highlights the border on hover */
}

/* Ensure the rest of your Home.vue styles are below here */
</style>
<template>
  <div class="wellness-container">
    <header class="wellness-header">
      <h1>Daily Wellness Roadmap</h1>
      <p>Small steps lead to big changes. Try these today.</p>
    </header>

    <div class="roadmap">
      <div class="roadmap-item">
        <div class="marker">01</div>
        <div class="roadmap-content">
          <h3>Stay Hydrated</h3>
          <p>Drink at least 8 glasses of water. Hydration is key to mental clarity.</p>
          <span class="tag">Physical</span>
        </div>
      </div>

      <div class="roadmap-item">
        <div class="marker">02</div>
        <div class="roadmap-content">
          <h3>Digital Detox</h3>
          <p>Put your phone away 30 minutes before bed to improve sleep quality.</p>
          <span class="tag">Rest</span>
        </div>
      </div>

      <div class="roadmap-item">
        <div class="marker">03</div>
        <div class="roadmap-content">
          <h3>Gratitude Journal</h3>
          <p>Write down three things you are thankful for today.</p>
          <span class="tag">Mental</span>
        </div>
      </div>

      <div class="roadmap-item">
        <div class="marker">04</div>
        <div class="roadmap-content">
          <h3>Mindful Walk</h3>
          <p>A quick 10-minute walk outside can reset your stress levels.</p>
          <span class="tag">Activity</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wellness-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
}

.wellness-header {
  text-align: center;
  margin-bottom: 40px;
}

/* THE ROADMAP / TIMELINE */
.roadmap {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}

/* The vertical line in the background */
.roadmap::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e0e7e0;
}

.roadmap-item {
  display: flex;
  gap: 20px;
  position: relative;
  transition: 0.3s;
}

.marker {
  min-width: 42px;
  height: 42px;
  background: white;
  border: 2px solid #8da399;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a5d4a;
  font-weight: bold;
  font-size: 0.9rem;
  z-index: 1;
}

.roadmap-content {
  background: white;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #f0f4f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  flex: 1;
  text-align: left;
}

.roadmap-item:hover .roadmap-content {
  border-color: #8da399;
  transform: translateX(10px);
}

.roadmap-item:hover .marker {
  background: #8da399;
  color: white;
}

h3 {
  margin: 0 0 8px 0;
  color: #4a5d4a;
  font-size: 1.1rem;
}

p {
  margin: 0 0 12px 0;
  color: #7a8d7a;
  font-size: 0.95rem;
  line-height: 1.5;
}

.tag {
  font-size: 0.75rem;
  background: #f0f4f0;
  color: #5c755c;
  padding: 4px 10px;
  border-radius: 8px;
  font-weight: 600;
}
</style>
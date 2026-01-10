<template>
  <div class="breathing-container">
    <header class="breathing-header">
      <h1>Breathing Exercise</h1>
      <p>Follow the circle to find your inner calm.</p>
    </header>

    <div class="exercise-area">
      <div :class="['breathing-circle', status]">
        <div class="circle-text">{{ statusText }}</div>
      </div>
      
      <div class="instruction-box">
        <span class="timer">{{ seconds }}s</span>
      </div>

      <button @click="toggleExercise" class="action-btn">
        {{ isActive ? 'Stop' : 'Start Exercise' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'

const isActive = ref(false)
const status = ref('idle') // idle, inhale, hold, exhale
const statusText = ref('Ready?')
const seconds = ref(0)
let timer = null

const startSequence = () => {
  let step = 0
  const sequence = [
    { text: 'Inhale', state: 'inhale', duration: 4 },
    { text: 'Hold', state: 'hold', duration: 4 },
    { text: 'Exhale', state: 'exhale', duration: 4 }
  ]

  const run = () => {
    const current = sequence[step]
    status.value = current.state
    statusText.value = current.text
    seconds.value = current.duration

    timer = setInterval(() => {
      seconds.value--
      if (seconds.value <= 0) {
        clearInterval(timer)
        step = (step + 1) % sequence.length
        run()
      }
    }, 1000)
  }
  run()
}

const toggleExercise = () => {
  isActive.value = !isActive.value
  if (isActive.value) {
    startSequence()
  } else {
    clearInterval(timer)
    status.value = 'idle'
    statusText.value = 'Ready?'
    seconds.value = 0
  }
}

onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.breathing-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.breathing-header {
  text-align: center;
}

/* THE CIRCLE ANIMATION */
.breathing-circle {
  width: 200px;
  height: 200px;
  background: #e8eee8;
  border: 2px solid #8da399;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 4s linear; /* Matches the 4s inhale/exhale */
  box-shadow: 0 0 20px rgba(141, 163, 153, 0.2);
  margin-bottom: 20px;
}

.circle-text {
  font-size: 1.4rem;
  font-weight: 500;
  color: #4a5d4a;
}

/* Animation States */
.inhale {
  transform: scale(1.5);
  background-color: #d1dbd1;
}

.exhale {
  transform: scale(1);
  background-color: #f0f4f0;
}

.hold {
  transform: scale(1.5); /* Keep it large while holding */
  border-style: dashed;
}

/* Controls */
.instruction-box {
  margin-bottom: 20px;
}

.timer {
  font-size: 1.2rem;
  color: #7a8d7a;
}

.action-btn {
  background-color: #4a5d4a;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.action-btn:hover {
  background-color: #3d4d3d;
  transform: scale(1.05);
}
</style>
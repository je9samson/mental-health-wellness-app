<template>
  <div class="ai-container">
    <header class="ai-header">
      <h1>AI Companion</h1>
      <p>A safe space for your thoughts.</p>
    </header>

    <div class="chat-box" ref="chatWindow">
      <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.role + '-message']">
        <div v-if="msg.role === 'ai'" class="avatar">🤖</div>
        <div class="bubble">{{ msg.text }}</div>
        <div v-if="msg.role === 'user'" class="avatar">👤</div>
      </div>
    </div>

    <div class="chat-input">
      <input 
        v-model="newMessage" 
        @keyup.enter="handleSend"
        type="text" 
        placeholder="Type your message here..." 
      />
      <button @click="handleSend" class="send-btn">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const newMessage = ref('')
const chatWindow = ref(null)

// Initial messages
const messages = ref([
  { role: 'ai', text: "Hello! I'm your Wellness AI. How are you feeling today?" }
])

const handleSend = async () => {
  if (!newMessage.value.trim()) return

  // 1. Add user message to the list
  messages.value.push({
    role: 'user',
    text: newMessage.value
  })

  const savedMessage = newMessage.value.toLowerCase()
  newMessage.value = ''

  // Scroll to bottom
  await nextTick()
  chatWindow.value.scrollTop = chatWindow.value.scrollHeight

  // 2. Simulate AI response after a short delay
  setTimeout(async () => {
    let response = "I'm listening. Tell me more about that."
    
    if (savedMessage.includes("sad") || savedMessage.includes("bad")) {
      response = "I'm sorry you're feeling that way. Remember that it's okay to have down days. 🌿"
    } else if (savedMessage.includes("hello") || savedMessage.includes("hi")) {
      response = "Hi there! I'm here to support your mental wellness journey."
    }

    messages.value.push({ role: 'ai', text: response })
    
    await nextTick()
    chatWindow.value.scrollTop = chatWindow.value.scrollHeight
  }, 1000)
}
</script>

<style scoped>
/* Keep your existing CSS from the previous message here */
.ai-container { display: flex; flex-direction: column; height: 500px; max-width: 500px; margin: 0 auto; }
.ai-header { text-align: center; margin-bottom: 20px; }
.chat-box { flex: 1; background: #fdfdfd; border: 1px solid #e0e7e0; border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 15px; overflow-y: auto; margin-bottom: 15px; }
.message { display: flex; align-items: flex-end; gap: 10px; }
.bubble { padding: 12px 16px; border-radius: 18px; font-size: 0.95rem; max-width: 75%; }
.ai-message .bubble { background: #e8eee8; color: #4a5d4a; border-bottom-left-radius: 2px; }
.user-message { justify-content: flex-end; }
.user-message .bubble { background: #8da399; color: white; border-bottom-right-radius: 2px; }
.chat-input { display: flex; gap: 10px; background: white; padding: 10px; border-radius: 15px; border: 1px solid #e0e7e0; }
input { flex: 1; border: none; outline: none; padding: 5px 10px; }
.send-btn { background: #4a5d4a; color: white; border: none; padding: 8px 12px; border-radius: 10px; cursor: pointer; }
</style>
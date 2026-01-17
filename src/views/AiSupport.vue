<script setup>
import { ref } from 'vue'
import { getAiMessage } from '../services/aiService'
import { fallbackMessages } from '../services/fallbackMessages'

const mood = ref("")
const aiMessage = ref("")
const loading = ref(false)
const history = ref([])
const isOffline = ref(false)
const charLimit = 100 // Character limit

const moods = [
  { label: "Stressed", emoji: "😫" },
  { label: "Sad", emoji: "😢" },
  { label: "Tired", emoji: "😴" },
  { label: "Anxious", emoji: "😰" },
  { label: "Lonely", emoji: "👤" }
]

const askAI = async () => {
  // VALIDATION: Prevent empty or too long messages
  if (!mood.value) return alert("Please type how you feel first!")
  if (mood.value.length > charLimit) return alert("Message is too long!")
  
  loading.value = true
  aiMessage.value = ""
  let response = ""

  if (isOffline.value) {
    response = fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)]
    await new Promise(r => setTimeout(r, 500))
  } else {
    response = await getAiMessage("Support for: " + mood.value)
  }
  
  aiMessage.value = response

  // ADD TO HISTORY with an empty reaction
  history.value.unshift({
    userText: mood.value,
    aiText: response,
    mode: isOffline.value ? "Offline" : "Online",
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    reaction: null // Stores the emoji chosen by user
  })
  
  loading.value = false
}

// Function to add a reaction to a specific history item
const addReaction = (index, emoji) => {
  history.value[index].reaction = emoji
}

const setMood = (m) => { mood.value = m }
</script>

<template>
  <div class="p-6 max-w-xl mx-auto">
    
    <div :class="isOffline ? 'bg-orange-100 border-orange-200' : 'bg-green-100 border-green-200'" 
         class="mb-6 p-3 rounded-lg border flex justify-between items-center transition-colors">
      
      <div>
        <p class="text-[10px] uppercase font-bold text-gray-500 leading-none">Current Status</p>
        <p :class="isOffline ? 'text-orange-700' : 'text-green-700'" class="font-bold text-lg">
          {{ isOffline ? '📴 Offline (Local Messages)' : '🌐 Online (AI Active)' }}
        </p>
      </div>

      <button @click="isOffline = !isOffline" 
              :class="isOffline ? 'bg-orange-500' : 'bg-green-500'"
              class="px-4 py-2 rounded-full text-white text-xs font-bold shadow-sm transition-all active:scale-95">
        SWITCH TO {{ isOffline ? 'ONLINE' : 'OFFLINE' }}
      </button>
    </div>

    <div class="flex flex-wrap gap-2 mb-4">
      <button v-for="m in moods" :key="m.label" @click="setMood(m.label)"
        class="bg-white hover:bg-blue-50 border border-gray-200 px-3 py-1 rounded-full text-sm transition">
        {{ m.emoji }} {{ m.label }}
      </button>
    </div>

    <div class="relative">
      <textarea
        v-model="mood"
        :class="mood.length > charLimit ? 'border-red-500' : 'border-gray-200'"
        class="border-2 p-3 w-full rounded-xl outline-none transition-all"
        rows="3"
        placeholder="How are you feeling?"
      ></textarea>
      <span :class="mood.length > charLimit ? 'text-red-600' : 'text-gray-400'" class="absolute bottom-3 right-3 text-[10px]">
        {{ mood.length }} / {{ charLimit }}
      </span>
    </div>

    ...

    <button @click="askAI" :disabled="loading || mood.length > charLimit"
      class="mt-4 w-full bg-black text-white py-3 rounded-xl font-bold hover:opacity-80 disabled:bg-gray-300 transition">
      {{ loading ? 'Generating...' : 'Get Support Message' }}
    </button>

    <div v-if="history.length > 0" class="mt-10 space-y-6">
      <h3 class="text-gray-400 text-xs font-bold uppercase tracking-widest">Recent Activity</h3>
      
      <div v-for="(item, index) in history" :key="index" class="bg-gray-50 p-5 rounded-2xl relative">
        <div class="flex justify-between mb-2">
          <span class="text-[10px] bg-white px-2 py-1 rounded shadow-sm text-gray-500 uppercase">{{ item.mode }}</span>
          <span class="text-[10px] text-gray-400">{{ item.time }}</span>
        </div>
        
        <p class="text-gray-800 text-lg mb-4">"{{ item.aiText }}"</p>

        <div class="flex items-center gap-2 border-t pt-3">
          <span class="text-[10px] text-gray-400 mr-2">Helpful?</span>
          <button v-for="emoji in ['❤️', '👍', '✨']" :key="emoji" 
            @click="addReaction(index, emoji)"
            :class="item.reaction === emoji ? 'bg-white shadow-md border-blue-400 scale-110' : 'bg-transparent border-transparent'"
            class="text-lg hover:scale-125 transition-all border rounded-md px-1">
            {{ emoji }}
          </button>
          
          <span v-if="item.reaction" class="ml-auto text-xs text-blue-600 font-bold animate-bounce">
             You reacted with {{ item.reaction }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
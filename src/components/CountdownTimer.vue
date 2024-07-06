<template>
  <div class="countdown">
    <div
      class="timer"
      flex
      style="font-weight: bold; color: #f0ffff; text-shadow: #708090 1px 0 10px"
    >
      {{ formattedTime }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const targetTime = new Date('2024-09-28T23:59:59').getTime()
const currentTime = ref(new Date().getTime())
const timeRemaining = ref(targetTime - currentTime.value)

const formattedTime = computed(() => {
  const seconds = Math.floor(timeRemaining.value / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  return `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`
})

let intervalId: number

onMounted(() => {
  intervalId = setInterval(updateTimer, 1000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

function updateTimer() {
  currentTime.value = new Date().getTime()
  timeRemaining.value = Math.max(0, targetTime - currentTime.value)
}
</script>

<style scoped>
.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: -6vw; */
  height: 100vh;
  width: 80vw;
  z-index: 10;
}

.timer {
  font-size: 10vmin;
  font-weight: bold;
}
</style>

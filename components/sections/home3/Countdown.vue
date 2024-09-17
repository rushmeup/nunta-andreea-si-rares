<template>
  <!-- Countdown section -->
  <section class="countdown-section-two pt-0">
    <div class="bg bg-pattern-4"></div>
    <div class="anim-icons">
      <div class="icon-flower-3"></div>
      <div class="icon-flower-4"></div>
    </div>
    <div class="auto-container">
      <div class="sec-title text-center style-two">
        <span class="sub-title">Semper simul</span>
        <h2>Fiti alaturi de noi</h2>
        <!-- <div class="text">We would love to meet up and chat about how we can <br> make your dram wedding happen!</div> -->
      </div>
      <div class="outer-box wow fadeInUp">
        <div class="time-counter">
          <div class="time-counter-wrapper">
            <div class="counter-column"><span class="count">{{timer.days}}</span><sub>zile</sub></div>
            <div class="counter-column"><span class="count">{{timer.hours}}</span><sub>ore</sub></div>
            <div class="counter-column"><span class="count">{{timer.minutes}}</span><sub>minute</sub></div>
            <div class="counter-column"><span class="count">{{timer.seconds}}</span><sub>secunde</sub></div>
          </div>
          <div class="btn-box">
            <div class="theme-btn btn-style-two"><span class="btn-title">RSVP</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Countdown section -->
</template>
<script setup lang="ts">
import { watchEffect, onMounted } from "vue";
import { useTimer } from 'vue-timer-hook';


const targetTime = new Date('2024-09-28T23:59:59').getTime()
const currentTime = new Date().getTime()
const timeRemaining = targetTime - currentTime
console.log('curr ' + currentTime)
console.log('tar ' + targetTime)
console.log('rem ' + timeRemaining)


const time = new Date();
time.setSeconds(new Date(timeRemaining/1000)); // 10 minutes timer
const timer = useTimer(time);
// const restartFive = () => {
//   // Restarts to 5 minutes timer
//   const time = new Date();
//   time.setSeconds(time.getSeconds() + 300);
//   timer.restart(time);
// }
onMounted(() => {
  watchEffect(async () => {
    if(timer.isExpired.value) {
      console.warn('IsExpired')
    }
  })
})
</script>
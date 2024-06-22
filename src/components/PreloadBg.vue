<template>
  <div id="preload_bg">
    <!-- <img :src="bg" /> -->
  </div>
</template>

<style>
body {
  background-image: url('@/assets/DSC_8709.jpg');
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

#preload_bg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 100px;
}
</style>

<template>
  <div id="preload_bg">
    <meta name="viewport" content="width=device-width, initial-scale=0.3" />
  </div>
</template>

<style>
body {
  background-image: url('@/assets/DSC_8709_bkp.jpg');
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

#preload_bg {
  position: fixed;
  display: flex;
  width: device-width;
  height: 100%;
  /* top: 100px; */
  justify-content: center;
  align-items: center;
}
</style>

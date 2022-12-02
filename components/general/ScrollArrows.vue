<template>
  <div id="arrowAnim">
    <div class="arrowSliding">
      <div class="arrow"></div>
    </div>
    <div class="arrowSliding delay1">
      <div class="arrow"></div>
    </div>
    <div class="arrowSliding delay2">
      <div class="arrow"></div>
    </div>
    <div class="arrowSliding delay3">
      <div class="arrow"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#arrowAnim {
  width: 5vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.arrow {
  width: 5vw;
  height: 5vw;
  box-shadow: -14px -14px 5px -3px #B708F4, inset 12px 12px 10px -10px #FFA800;
  transform: rotate(-135deg);
}


.arrowSliding {
  position: absolute;
  -webkit-animation: slide 4s linear infinite;
  animation: slide 4s linear infinite;
}

.delay1 {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.delay2 {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.delay3 {
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

@-webkit-keyframes slide {
  0% { opacity:0; transform: translateY(-15vw); }
  20% { opacity:1; transform: translateY(-9vw); }
  80% { opacity:1; transform: translateY(9vw); }
  100% { opacity:0; transform: translateY(15vw); }
}
@keyframes slide {
  0% { opacity:0; transform: translateY(-15vw); }
  20% { opacity:1; transform: translateY(-9vw); }
  80% { opacity:1; transform: translateY(9vw); }
  100% { opacity:0; transform: translateY(15vw); }
}
</style>

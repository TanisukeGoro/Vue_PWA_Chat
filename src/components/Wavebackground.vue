<template>
    <div class="wave-box">
        <div class='box'>
            <div class='wave -one'></div>
            <div class='wave -two'></div>
            <div class='wave -three'></div>
        </div>
    </div>
</template>

<style scoped>

.box {
  /* left: 50%; */
  z-index: -1;
  width: 375px;
  height: 500px;
  /* border-radius: 5px; */
  background: lighten(#f0f4c3, 10%);
  position: fixed;
  top :500px;
  /* overflow: hidden; */
  transform: translate3d(0, 0, 0);
}

.wave {
  opacity: .4;
  position: absolute;
  top: 3%;
  left: 50%;
  background: #0af;
  width: 1700px;
  height: 1700px;
  margin-left: -550px;
  margin-top: -200px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 12000ms infinite linear;
}

.wave.-three {
  animation: drift 20000ms infinite linear;
}

.wave.-two {
  animation: drift 24000ms infinite linear;
  opacity: .1;
  background: #d5ec93;
}

.box:after {
  content: '';
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(#e8a, 1), rgba(#def, 0) 80%, rgba(white, .5));
  z-index: -1;
  transform: translate3d(0, 0, 0);
}

@keyframes drift {
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
}

</style>

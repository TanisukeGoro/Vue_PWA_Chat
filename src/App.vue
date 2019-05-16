<template>
  <div id="app">
    <div class="blank"></div>
    <header id="nav">
      <p @click="backhistory" style="display:inline"> ⇦ </p>
      <router-link to="/">Friends</router-link>
      <!-- <router-link to="/talk">Talk</router-link> -->
    </header> 

     <!-- 波描画のコンポーネント化  -->
    <WaveBG></WaveBG>
    <!-- ページの遷移 -->
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import WaveBG from '@/components/Wavebackground.vue'
import router from './router'

export default {
  name: 'waveBg',
  components: {
    WaveBG
  },
  methods: {
    backhistory: function(){
      router.go(-1);
    }
  },
}


</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.blank{
  display: inline-block;
  margin-bottom: 25px;
}

header {
  margin: 0;
  height: 30px;
  background-color: #73B8D6;
  color: #ffffff;
  left: 0;
  position:fixed;
  top:0;
  width:100%;
  z-index:24;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

#nav {
  padding-top: 10px;
  text-align: center;
}

#nav a {
  padding-top: 10px;
  font-weight: bold;
  color: #fff;
  text-decoration	: none;
}

#nav a.router-link-exact-active {
  color: #fff;
}

</style>

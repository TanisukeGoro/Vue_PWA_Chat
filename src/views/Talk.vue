<template>
  <div class="talk">
    <p id="hoge">{{ $route.params.userId }}</p>
    <p @click="hoge">テスト</p>
  </div>
</template>



<script>
import router from '../router'

export default {
  data() {
    return {
      oppId : '',
    }
  },
  methods: {
   hoge : ()=>{
    //  $route.params.userIdをJs側から読み取れないため。
     let test = document.getElementById('hoge');
     console.log(test.innerText.slice(1));

   }
 }, 
}
</script>
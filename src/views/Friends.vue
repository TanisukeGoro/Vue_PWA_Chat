<template>
  <div class="friends">
    <ul>
      <li v-for="user in userList" :key="user">
        <!-- <router-link to="/talk:{{user}}">Abe Talk</router-link> | -->
        <img src="" alt="">
        <p @click="goTalk(user)">{{ user }}</p>
      </li>
    </ul>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import router from '../router'

export default {
  name: 'friends',
  data () {
    return {
      userList : [
        "Abe",
        "Tanaka",
        "Ikeda",
        "Abe",
        "Tanaka",
        "Ikeda",
        "Abe",
        "Tanaka",
        "Ikeda",
        "Abe",
        "Tanaka",
        "Ikeda",
      ]
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    goTalk : (user)=>{
      // console.log(this)
      router.push(`/talk:${user}`)
    }
  },
}
</script>


<style>
ul{
   list-style: none;
   padding: 0;
}
ul>li{
  text-align: left;
  width: 375px;
  background-color: rgba(255, 255, 255, 0.4);
  /* opacity: 0.4; */
}
</style>

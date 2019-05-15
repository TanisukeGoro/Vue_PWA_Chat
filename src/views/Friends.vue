<template>
  <div class="friends">
    <ul>
      <li v-for="user in userList" :key="user">
        <p @click="goTalk(user, $route.params.myId)">{{ user }}</p>
      </li>
    </ul>

    <!-- <p>{{ $route.params.myId }}</p> -->
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
        "Ikeda"
      ]
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    goTalk : (user, my)=>{
      const myid = my.slice(1)
      // console.log(this)
      router.push(`/talk:${user}:${myid}`)
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

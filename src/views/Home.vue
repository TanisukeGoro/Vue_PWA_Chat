<template>
  <div class="home">
    <ul>
      <li v-for="user in userList" :key="user">
        <!-- <router-link to="/talk:{{user}}">Abe Talk</router-link> | -->
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
  name: 'home',
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
    goTalk : (user)=>{
      // console.log(this)
      router.push(`/talk:${user}`)
    }
  },
}
</script>



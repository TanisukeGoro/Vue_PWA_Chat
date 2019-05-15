<template>
  <div class="home">
    <h1>Home_page</h1>

    <ul>
      <li v-for="user in userList" :key="user">
        <!-- <router-link to="/talk:{{user}}">Abe Talk</router-link> | -->
        <p @click="goTalk(user)">{{ user }}</p>
      </li>
    </ul>
  </div>
</template>


<script>
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
  methods: {
    goTalk : (user)=>{
      // console.log(this)
      router.push(`/friends:${user}`)
    }
    
  },
  
}
</script>
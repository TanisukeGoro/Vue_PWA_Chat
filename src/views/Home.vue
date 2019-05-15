<template>
  <div class="home">
    <h1>Home_page</h1>

    <ul>
      <li class="selectMe" v-for="(user, i) in userList" :key="user">
        <!-- <router-link to="/talk:{{user}}">Abe Talk</router-link> | -->
        <div class="userli"  @click="goTalk(user)">
          <img class="icon" v-bind:src="userListicon[i]" alt="">
          <p class="myName">{{ user }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
import router from '../router'
import db from '../myfirestore'
export default {
  name: 'home',
  data () {
    return {
      userList : [],
      userListicon : [],
    }
  },
  mounted:function() {
    console.log(this);
    let a = [];
    let b = []
    db.collection("UserList").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          a.push(doc.id);
          b.push(doc.data().userIcon);
      });
    });
    this.userList = a;
    this.userListicon = b;
  },
  methods: {
    goTalk : (user)=>{
      // console.log(this)
      router.push(`/friends:${user}`)
    }
    
  },
  
}
</script>

<style>
ul{
  margin: 0;
  padding: 0;
}
li{
  padding-top: 5px;
  margin-bottom: 10px;
  width: 370px;
  height: 70px;
}
.userli{
  display: flex;
}
.icon{
  width: 55px;
  height: 55px;
  border-radius: 50%;
}

.myName{
  padding-left: 10px
}



</style>

<template>
  <div class="friends">
    <h1>Talk</h1>
    <ul>
      <li v-for="(user, i) in otherUList" :key="user">
        <div class="userli"  @click="goTalk(user, $route.params.myId)">
          <img class="icon" v-bind:src="otherUicon[i]" alt="">
          <p class="myName">{{ user }}</p>

        </div>

      </li>
    </ul>

    <!-- <p>{{ $route.params.myId }}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import db from '../myfirestore'
import firebase from '../myfirestore'

import router from '../router'

export default {
  name: 'friends',
  data () {
    return {
      otherUList : [],
      otherUicon : [],
      db : '',


    }
  },
 mounted:function() {
    this.db = firebase.firestore();

    console.log(this);
    let a = [];
    let b = []
    this.db.collection("UserList").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          a.push(doc.id);
          b.push(doc.data().userIcon);
      });
    });
    this.otherUList = a;
    this.otherUicon = b;
  },
  methods: {
    goTalk : (user, my)=>{
      const myid = my.slice(1)
      // console.log(this)
      router.push(`/talk:${myid}:${user}`)
    }
  },
}
</script>


<style scoped>
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

<template>
  <div class="talk">
    <div class="talkid">
      <h1 id="chatid" class="talktitle">{{$route.params.myId}}</h1>
    </div>
    <!-- <div @click="debug1" class="debug1">デバッグボタン</div> -->
    <div class="blank-top"></div>
    <ul>
      <li class="post-li" v-for="(chat, index) in chatLogs" :key="index">
        <div v-bind:class="{postLog:true ,userpost:isActive}">
          <!-- <p>{{(chatLogsSub[index] == myId)}}</p> -->
        <!-- <img class="postIcon" v-bind:src="myIcon" alt=""> -->
        <!-- <img  v-if="chatLogsSub[index]!==myId" class="postIcon" v-bind:src="myIcon" alt=""> -->
        <img  v-if="(chatLogsSub[index] !== myId)" class="postIcon" v-bind:src="oppIcon" alt="">
        <img  v-if="(chatLogsSub[index] == myId)" class="postIcon" v-bind:src="myIcon" alt=""> 
        <p>{{chat}}</p>
        </div>
      </li>
    </ul>
    <div class="blank-bottom"></div>

    <div class="chat-form">
        <div class="form-container" id="hoge">

          <label class=pic-btn>
            <img src="../assets/picture.png" alt="" height="40" width="40">
            <input type=file accept="image/*" capture>
          </label> 

          <textarea class="message" v-model="message" id="textarea" placeholder="メッセージを入力" ></textarea>

          <button class="submit" @click="submit">
            <img src="../assets/submit.png" alt="submit" height="40" width="40">
          </button>
        </div>
    </div>
  </div>
</template>



<script>
import ChatComp from '@/components/ChatComponent.vue'
import router from '../router'
import firebase from '../myfirestore'



export default {
  data() {
    return {
      db : '',

      post_log : [],

      oppId : '',
      oppIcon : '',
      myId : '',
      myIcon : '',

      message: '',
      textElem : '',
      
      chatLogs : [],
      chatLogsSub : [],

      isActive : false,
      userpost : 'me',

    }
  },
   mounted : function(){
    this.db = firebase.firestore();
    this.textElem = document.getElementById('textarea');

    // ユーザー名の取得
    const _chatid = document.getElementById('chatid').innerText;
    const _userName = _chatid.split(':');
    this.myId = _userName[0];
    this.oppId = _userName[1];
    const _myId = this.myId;
    const _oppId = this.oppId;
    console.log(_myId);
    console.log(_oppId);
    let _myIcon = '';
    let _oppIcon = '';
    // ユーザーアイコンを取得
    this.db.collection("UserList").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // console.log(doc.id);
                if (_myId == doc.id) _myIcon = doc.data().userIcon;
                if (_oppId == doc.id) _oppIcon = doc.data().userIcon;
            })
        })
        .then(doc => {
          this.myIcon=_myIcon;
          this.oppIcon=_oppIcon;
        })
        .catch(error => {
            console.log('document add error');
            console.log(error);
        });
    // ユーザー間のデータの授受が見れるようになる
    let logOnfire = [];
    let logOnfireMes = [];
    let logOnfireSub = [];
    let temp = [];
    let mesID = '';
    mesID = `${_myId}:${_oppId}`;
    mesID = mesID.trim();
    this.db.collection("messages").get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc) {
        console.log(doc.id);
        console.log((doc.id == mesID));
        if (doc.id == mesID){
          // console.log(doc.id);
          // console.log(doc.data());
          let a = doc.data();
          a.test1.forEach(function(mes){
            console.log(mes.message)
            logOnfireMes.push(mes.message);
            logOnfireSub.push(mes.submitter);
            temp.push ({
              message: mes.message,
              created: mes.created,
              submitter: mes.submitter
            })
            console.log(mes.submitter);
          });

        }
      })
    })
    .then(doc => {
            this.chatLogs = logOnfireMes;
            this.chatLogsSub = logOnfireSub;
            this.post_log = (temp)
        })
        .catch(error => {
            console.log('document add error');
            console.log(error);
    });
    // `${_myId}:${_oppId}`)
    // .get()
    // .then(function(querySnapshot) {
    //         // querySnapshot.forEach(function(doc) {
    //             console.log(querySnapshot);
    //         // })
    //     })
        

        
    },

    
      
  methods: {
    submit :function(){

      // textareaの値を取得
      const _chatText = this.textElem.value;
      console.log(_chatText);
      // 入力がないときは更新しない
      if (!_chatText.match(/\S/g)) return false;
      let _cTime = this.carrTime();
      let kk = '';
      let mesID = `${this.oppId}:${this.myId}`;
      mesID = mesID.trim();
      const carrTestArr = this.db.collection('messages')
        .where(mesID, '==', true)
        .get()
        .then((kk)=>{
          console.log(kk);
        })

      // .doc(`${this.oppId}:${this.myId}`).get(test);
      console.log(carrTestArr);
      const li_len = document.querySelectorAll('li');
      console.log(li_len.length);
      let test = `test${li_len.length}`
      console.log(test);
      this.post_log.push({
        message: _chatText,
        created: _cTime,
        submitter: this.myId
      })
      mesID = `${this.oppId}:${this.myId}`;
      // 相手側の設定
      this.db.collection("messages").doc(mesID).set({test1:this.post_log})
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
      mesID= `${this.myId}:${this.oppId}`;
      // 自分側の設定
      this.db.collection("messages").doc(`${this.myId}:${this.oppId}`).set({test1:this.post_log})
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });

      this.chatLogsSub.push(this.myId)
      this.chatLogs.push(_chatText);
      window.scrollTo(0, document.body.clientHeight)
      this.message = '';

    

    },
    scrollBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight)
      })
    },
    carrTime : function() {
      const now = new Date();
      const nYear = ('000' + now.getFullYear()).slice(-4);
      const nMonth = ('0' + (now.getMonth() + 1)).slice(-2);
      const nDate = ('0' + now.getDate()).slice(-2);
      const nHour = ('0' + now.getHours()).slice(-2);
      const nMin = ('0' + now.getMinutes()).slice(-2);
      const nSec = ('0' + now.getSeconds()).slice(-2);
      const nMs = ('00' + now.getMilliseconds()).slice(-3);
      return `${nYear}${nMonth}${nDate}${nHour}${nMin}${nSec}${nMs}`;

    },

    debug1 : function(){
      console.log(this.carrTime());
    }
  },

  watch: {
    messageWatcher : function (){
      collection.orderBy('created').onSnapshot(snapshot => {
        console.log('debug.1');
        snapshot.docChanges().forEach(change => {
            if (change.type == 'added') {
                const li = document.createElement('li');
                const d = change.doc.data();

                li.textContent = d.uid.substr(0, 8) + ":" + d.message;
                messages.appendChild(li);
            }
        });
      }, error => {

      });

    }
  },
}
</script>

<style>

.talkid{
  z-index : 2;
  position: fixed;
  top: 40px;
  left:calc(50% - 340px/2);
  width: 340px;
}
.talktitle{
  font-size: 14px;
  /* text-align: center; */
  /* left: 50%; */
  /* left:calc(50% - 50px/2); */
  background-color: rgba(32, 80, 136, 0.199);
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
}

ul{
  padding-bottom: 10px;
  padding-left: 10px;
  list-style: none;
  text-align: left;
}

.post-li{ 
  max-width: 220px;
}
.userpost{
  padding-left: 100px;
}
.blank-top{
  height: 600px;
}
.blank-bottom{
  height: 20px;
}
.postLog{
  display: flex;
}
.postIcon{
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.debug1{
  z-index: 20;
  position:fixed;
  top: 200px;
}
</style>
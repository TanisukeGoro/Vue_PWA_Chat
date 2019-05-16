<template>
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
</template>

<script>
import router from '../router'

export default {
  //   props: {
  //   applyEvent: {
  //     type: String,
  //     required: true
  //   }
  // },
  data () {
    return {
      message: '',
      textElem : ''
      // rows : 1
    }
  },
  mounted() {
    this.textElem = document.getElementById('textarea');
  },
  methods: {
    submit :function(){
      console.log(this.textElem.value);

      this.message = '';
    },
    scrollBottom: function(){
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight)
      })
    },
  },
  // computed:{
  //   rows:function(){
  //       var num = this.value.split("\n").length;
  //       return (num > 4) ? num : 4;
  //   }
  // }
}
</script>

<style>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

.form-container {
  position: fixed;
  bottom :0px;
}

.form-container > .message {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width: 260px;
    max-height: 200px;
    border-radius: 18px;
    border : solid 2px #d3d3d3;
    padding-top: 15px;
    padding-left: 15px;
    font-size: 16px;
    transform: scale(0.8);
}
textarea{
  outline: none;
}
  

input[type=text-area]:focus {
    outline: none;
}

.form-container> .submit {
    position: absolute;
    top: 0;
    bottom: 0;
    text-align: center;
    color: white;
}
.form-container>.pic-btn {
  font-size: 20px;
  cursor:pointer
  }
.form-container>.pic-btn > input[type=file] {
  position:absolute; 
  overflow:hidden; 
  width:1px; 
  height:1px; 
  opacity:0
  }
  .talktitle{
  font-size: 14px;
}

</style>

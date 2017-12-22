<style scoped>
.message-line{
  position:relative;
  display:block;
  width:100%;
min-height:40px;
}

.message{
  display:block;
  float:left;
  clear: both;
  max-width:80%;
  padding:5px 10px;
  margin:5px;
  color:#fff;
  background-color:#00c6da;
  border-radius:10px;
}
.cs{
  float:right;
  background-color:white;
  background-color:#1fa0eecc;
}
</style>
<template>
  <div class="">
    <div style="margin-top: 40px;font-size: 40px;">
      客服与用户交流信息渠道
    </div>
    <div v-loading="loadingUser" style="display: flex; flex-direction: row; justify-content: center; margin-top: 50px;margin-bottom: 100px;">
      <div style="border-radius: 10px 0 0 10px;overflow: scroll; width: 20%; min-width: 200px; height:500px; border: 1px solid rgb(230,230,230);">
        <div v-for="(user, index) in users" :key="index">
          <el-badge :value="user.csunread" style="width:80%; margin: 10px">
            <el-button style="width:100%; height: 50px;" @click = "updateMsg(user)">
              <div style="weight: bold;">{{user.number}}</div>
            </el-button>
          </el-badge>
        </div>
        <el-button type="success" style="margin-bottom: 10px" v-on:click="moreUser()" >向下翻</el-button>
      </div>
      <div style="width: 50%;">
        <div id="chatbox" v-loading="loadingMsg" style="border-radius: 0 10px 10px 0; width: 100%; height: 500px; overflow: scroll; background-color: rgb(230,230,230)">
          <!-- <el-button type="success" style="margin-top: 10px" v-on:click="moreMessage()" >向上翻</el-button> -->
          <div class="message-line" style="" v-for="(message, index) in messages" :key="index">
              <div class="message" :class="message.from">
                <span>{{message.text}}</span>
                <span style="display: block;font-size: 12px;text-align: left;opacity: 0.5;">{{message.createdAt}}</span>
              </div>
          </div>
        </div>
        <div style="margin-top: 10px">
          <input style="height: 30px;width: 200px;font-size: 15px;" placeholder="请在这里回复客户信息..." @keyup.enter="send()" v-model="txt" />
          <el-button type="warning" v-on:click="send()" >发送</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//
// [{userId: '13913351453', csunread: 1, msg: [{from:'', txt: '你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'},  {from:'cs', txt: '您好，请问您指的哪一个？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '就是这个呀', createdTime: '2017年12月16日12：30'}]},
// {userId: '13913351453', csunread: 12, msg: [{from:'', txt: '2你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'},  {from:'cs', txt: '您好，请问您指的哪一个？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '就是这个呀', createdTime: '2017年12月16日12：30'}]},
// {userId: '13913351454', csunread: 13, msg: [{from:'', txt: '3你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '3你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '3你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '3你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '3你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '3你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '3你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '3你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '3你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '3你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'}, {from:'cs', txt: '您好，请问您指的哪一个？', createdTime: '2017年12月16日12：30'}, {from:'cs', txt: '您好，请问您指的哪一个？', createdTime: '2017年12月16日12：30'}, {from:'cs', txt: '您好，请问您指的哪一个？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '就是这个呀', createdTime: '2017年12月16日12：30'}]},
// {userId: '13913351455', csunread: 14, msg: [{from:'', txt: '4你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'},  {from:'cs', txt: '您好，请问您指的哪一个？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '就是这个呀', createdTime: '2017年12月16日12：30'}]},
// {userId: '13913351456', csunread: 15, msg: [{from:'', txt: '5你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'},  {from:'cs', txt: '您好，请问您指的哪一个？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '就是这个呀', createdTime: '2017年12月16日12：30'}]},
// {userId: '13913351457', csunread: 16, msg: [{from:'', txt: '6你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'},  {from:'cs', txt: '您好，请问您指的哪一个？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '就是这个呀', createdTime: '2017年12月16日12：30'}]},
// {userId: '13913351455', csunread: 14, msg: [{from:'', txt: '4你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'},  {from:'cs', txt: '您好，请问您指的哪一个？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '就是这个呀', createdTime: '2017年12月16日12：30'}]},
// {userId: '13913351456', csunread: 15, msg: [{from:'', txt: '5你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'},  {from:'cs', txt: '您好，请问您指的哪一个？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '就是这个呀', createdTime: '2017年12月16日12：30'}]},
// {userId: '13913351457', csunread: 16, msg: [{from:'', txt: '6你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'},  {from:'cs', txt: '您好，请问您指的哪一个？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '就是这个呀', createdTime: '2017年12月16日12：30'}]},
// {userId: '13913351458', csunread: 7, msg: [{from:'', txt: '7你好，请问这个怎么学？', createdTime: '2017年12月16日12：30'},  {from:'cs', txt: '您好，请问您指的哪一个？', createdTime: '2017年12月16日12：30'}, {from:'', txt: '就是这个呀', createdTime: '2017年12月16日12：30'}]} ],

export default {
  name: 'ChatPage',
  data () {
    return {
      txt: '',
      messages: [],
      users: [],
      currentUser: '',
      loadingMsg: false,
      loadingUser: false,
      userPage: 0
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected from vue client')
      this.$socket.emit('customerServiceConnected', {})
    },
    customerservice: function () {
      console.log('I am customer service')
    },
    csack: function (data) {
      console.log('receive ack from server: ' + JSON.stringify(data))
    },
    users: function (data) {
      // 先只考虑用户级翻页，消息级暂时认为很少，全部加载
      if (data.info === 'ok') {
        // console.log('users: ' + JSON.stringify(data.pack));
        this.users = data.pack
        this.userPage = 1
      }
    },
    userExistingMsg: function (data) {
      // TODO: receive user msg
      if (this.users) {
        var self = this
        this.users.forEach(function (item) {
          console.log('item: ' + JSON.stringify(item))
          console.log('data: ' + JSON.stringify(data))
          if (item.number === data.userId) {
            console.log('looK:' + JSON.stringify(data))
            console.log('item.messages:' + JSON.stringify(item.messages))
            item.messages.push(data.msg)
            console.log('item.messages:' + JSON.stringify(item.messages))
            setTimeout(function () {
              var objDiv = document.getElementById('chatbox')
              objDiv.scrollTop = objDiv.scrollHeight
            }, 0)
            self.openNotification(data)
          }
        })
      }
    }
  },
  mounted: function () {
    // this.init()
    // this.openNotification({userId: 138132323, msg: "testing" })
  },
  methods: {
    moreUser () {
      var self = this
      self.loadingUser = true
      this.$http.post('/api/moreuser', {
        page: this.userPage
      }).then(function (res) {
        console.log('feeback of udpating csunread from server: ' + JSON.stringify(res))
        self.loadingUser = false
        this.userPage++
      })
    },
    // moreMessage() {
    //   var self = this
    //   self.loadingMsg = true
    //   setTimeout(function() {
    //     self.loadingMsg = false
    //   }, 1000)
    // },
    openNotification (data) {
      const h = this.$createElement

      this.$notify({
        title: '来自用户' + data.userId,
        message: h('i', { style: 'color: teal' }, data.msg)
      })
    },
    updateMsg: function (user) {
      user.csunread = 0
       // TODO: update csunread  cross orgin issue
       // this.$http.post('http:\/\/127.0.0.1:3000/api/updatecsunread', {
       //   body: user.userId
       // }).then(function(res){
       //   console.log('feeback of udpating csunread from server: ' + JSON.stringify(res));
       // })
      this.messages = user.messages
      setTimeout(function () {
        var objDiv = document.getElementById('chatbox')
        objDiv.scrollTop = objDiv.scrollHeight
      }, 0)
    },
    init: function () {
      // let message = {from: '', txt: 'Tell me something'}
      // this.messages = this.users[0].msg
      // this.users[0].csunread = 0
      this.ping()
    },
    send: function () {
      if (this.txt.length === 0) return
      let message = {from: 'cs', txt: this.txt}
      this.$socket.emit('csmessage', {userId: this.currentUser, message: message})
      // 这边不知道怎么找回调，就手动更新信息，但是需要后台给出ack才能确认此信息完成发送，可以模拟微信的mini loading或者whatsapp
      // TODO: 加ack识别符号，不着急，可以作为bug处理
      this.messages.push(message)
      // var self = this
      // setTimeout(function () {
      //   let answer = {from: '', txt: 'Lorem ipsum dolor sit amet...'}
      //   self.messages.push(answer)
      // }, 1500)
      var objDiv = document.getElementById('chatbox')
      objDiv.scrollTop = objDiv.scrollHeight
      this.txt = ''
    },
    ping: function () {
      // exemple of getting messages in API with conversations params
      setInterval(function () {
        console.log('get messages')
      }, 10000)
    }
  }
}
</script>

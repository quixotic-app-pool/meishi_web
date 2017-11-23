<template>
  <div class="zm-setting-container">
    <div class="zm-setting-inner">
      <div class="zm-setting-title">
        设置个人信息
      </div>
      <div class="zm-setting-box">
        <div class="zm-setting-option">
          <div id="focus1" @click="switchTab(1)">
            基本信息
          </div>
          <div id="focus2" @click="switchTab(2)">
            设置头像
          </div>
        </div>
        <div v-if="index === 1" class="zm-setting-main">
          <div class="zm-setting-main-first">
            <div style="width: 20%; text-align: right; padding-right: 20px;">
              昵称
            </div>
            <div style="width: 40%">
              <el-input style="font-size:16px;" placeholder="我的偶像爱因斯坦" v-model="input"></el-input>
            </div>
            <div style="width: 40%; color: #909090">
              提示：七天内只能修改一次昵称
            </div>
          </div>
          <div class="zm-setting-main-second">
            <div style="width: 20%; text-align: right; padding-right: 20px;">
              自我介绍
            </div>
            <el-input
              style="width: 80%;"
              type="textarea"
              :rows="10"
              placeholder="介绍一下自己，让更多朋友认识你..."
              v-model="textarea">
            </el-input>
          </div>
          <div class="zm-setting-main-third">
            <div style="width: 20%; text-align: right; padding-right: 20px;">
              性别
            </div>
            <div style="width: 80%;">
              <el-radio style="float:left" v-model="radio" label="1">男</el-radio>
              <el-radio style="float:left" v-model="radio" label="2">女</el-radio>
              <el-radio style="float:left" v-model="radio" label="3">其他</el-radio>
            </div>
          </div>
          <div class="zm-setting-main-forth">
            <div style="width: 20%; text-align: right; padding-right: 20px;">
              生日
            </div>
            <div style="width: 80%;">
              <el-date-picker
                style="width: 30%; float: left;"
                v-model="value1"
                type="date"
                placeholder="Pick a day"
                default-value="1990-10-01"
                >
              </el-date-picker>
            </div>
          </div>
          <div class="zm-setting-main-fifth">
            <div style="width: 20%; text-align: right; padding-right: 20px;">
              家乡
            </div>
            <div style="width: 80%;">
              <el-select style="width: 30%; float:left; padding-right: 20px;" v-model="value" placeholder="选择省">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select style="width: 30%; float:left" v-model="value" placeholder="选择市">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="zm-setting-main-sixth">
            <div style="width: 20%; text-align: right; padding-right: 20px;">
              现居
            </div>
            <div style="width: 80%;">
              <el-select style="width: 30%; float:left; padding-right: 20px;" v-model="value" placeholder="选择省">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select style="width: 30%; float:left" v-model="value" placeholder="选择市">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="zm-setting-main-seventh">
            <div style="width: 20%; text-align: right; padding-right: 20px;">
              职业
            </div>
            <div style="width: 80%;">
              <el-select style="width: 30%; float:left;" v-model="value" placeholder="选择职业">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="zm-setting-main-eighth">
            <div style="width: 20%; text-align: right; padding-right: 20px;">

            </div>
            <div style="width:80%;">
              <el-button style="float:left;width:30%;" type="danger" name="button">保存更新</el-button>
            </div>
          </div>
        </div>
        <div v-if="index === 2" style="display:flex; flex-direction:column; " class="zm-setting-main">
          <el-upload style="" class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <div v-else style="
                border: 1px dashed #d9d9d9;
                border-radius: 6px;"
                class="el-icon-plus avatar-uploader-icon"></div>
          </el-upload>
          <div style="padding: 50px 0; ">
            <el-button type="danger" name="button">更新头像</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingPage',
  data () {
    return {
      imageUrl: '',
      radio: '',
      value1: 0,
      value: 0,
      textarea: '',
      input: '',
      index: 1,
      options: [{label: 'this is label', value: 'this is value'}, {label: 'this is label', value: 'this is value'}]
    }
  },
  mounted () {
    document.getElementById('focus1').style.color = '#dd3915'
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    },
    switchTab (index) {
      this.index = index
      if (index === 1) {
        document.getElementById('focus1').style.color = '#dd3915'
        document.getElementById('focus2').style.color = '#2c3e50'
      } else {
        document.getElementById('focus2').style.color = '#dd3915'
        document.getElementById('focus1').style.color = '#2c3e50'
      }
    }
  }
}
</script>

<style scoped>
.zm-setting-main-eighth {
  display: flex;
  align-items: center;
}
.zm-setting-main-seventh {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
.zm-setting-main-sixth {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
.zm-setting-main-fifth {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
.zm-setting-main-forth {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
.zm-setting-main-third {
  display: flex;
  padding: 20px 0;
  align-items: center;
}
.zm-setting-main-second {
  display: flex;
}
.zm-setting-main-first {
  display: flex;
  padding-bottom: 20px;
  align-items: center;
}
.zm-setting-main {
  width: 100%;
  max-width: 600px;
  padding: 20px 0;
}
.zm-setting-option {
  display: flex;
  padding-bottom: 20px;
}
.zm-setting-option div {
  padding: 10px;
  cursor: pointer;
}
.zm-setting-option div:hover {
  background-color: #dd3915 !important;
  color: white !important;
}
.zm-setting-box {

}
.zm-setting-title {
  align-self: flex-start;
  font-size: 34px;
  padding: 30px 0;
  line-height: 1.2;
  font-weight: 700;
}
.zm-setting-inner {
  display: flex;
  flex-direction: column;
}
.zm-setting-container {
  padding: 0 10%;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
},
.avatar-uploader .el-upload:hover {
  /*border-color: #409EFF;*/
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

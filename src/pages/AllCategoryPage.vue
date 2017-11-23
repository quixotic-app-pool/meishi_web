<template>
  <div class="zm-all-container">
    <div class="zm-all-inner">
      <div class="zm-all-title">
        分类浏览
      </div>
      <div class="zm-all-box">
        <div class="zm-all-box-inner">
          <div class="zm-all-topic" v-for="(item1, index1) in 6" :key="index1" >
            <div class="zm-all-topic-title">
              热门专题
            </div>
            <div class="zm-all-topic-container">
              <div class="zm-all-topic-content" v-for="(item2, index2) in 6" :key="index2">
                <div class="zm-all-topic-content-type">
                    菜式
                </div>
                <div class="zm-all-topic-content-box">
                  <a href="#" class="zm-all-topic-content-name" v-for="(item3, index3) in 10" :key="index3">
                    家常菜
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllCategoryPage',
  data () {
    return {}
  }
}
</script>
<style scoped>
.zm-all-container {
  background-color: white;
  padding: 0 10%;
}
.zm-all-inner {
  display: flex;
  flex-direction: column;
}
.zm-all-title {
  padding: 40px 0 16px 0;
  font-size: 34px;
  font-weight: 700;
  align-self: flex-start;
}
.zm-all-box {
  background-color: #f5f6f5;
}
.zm-all-box-inner {
  padding:50px;
}
.zm-all-topic {
  display: flex;

}
.zm-all-topic-title {
  font-weight: 700;
  font-size: 20px;
  width: 20%;
  padding-right: 10%;
}
.zm-all-topic-container {

}
.zm-all-topic-content {
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #f3f3f3;
}
.zm-all-topic-content-type {
  align-self: flex-start;
  color: #909090;
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 20px;
}
.zm-all-topic-content-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.zm-all-topic-content-name {
  text-decoration: none;
  color: #222;
  width: 105px;
  text-align: left;
  padding-bottom: 3px;
}
.zm-all-topic-content-name:hover {
  color: #dd3915;
}
</style>

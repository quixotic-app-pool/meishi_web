<template>
  <div class="">
    <el-dialog
      :visible.sync="visible"
      width="30%">
      <span>{{msg}}</span>
      <span slot="footer" class="">
        <el-button type="primary" @click="closeDialog()">知道了</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'Dialog',
    props: {
      dialogVisible: {
        type: Boolean,
        default: false
      },
      msg: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        visible: false
      }
    },
    watch: {
      dialogVisible: function (val, oldVal) {
         if(val === true) {
           this.visible = true
         }
      },
      visible: function (val, oldVal) {
        this.$parent.dialogVisible = false
      }
    },
    methods: {
      closeDialog () {
        this.visible = false
        this.$parent.dialogVisible = false
      }
    }
  };
</script>

<template>
  <div class="">
    <el-dialog
      :visible.sync="visible"
      :width="dynamicWidth">
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
    computed: {
      dynamicWidth () {
        return this.model.viewport === 0 ? '80%' : '500px'
      }
    },
    data () {
      return {
        visible: false,
        model: window.cnfg.model
      }
    },
    watch: {
      dialogVisible: function (val, oldVal) {
        if (val === true) {
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
  }
</script>

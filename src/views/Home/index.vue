<!--  -->
<template>
  <div>
    <div>Home</div>
    <i class='FIcon icon-FillCopy'></i>
    <p>{{username}}</p>
    <el-button>你好</el-button>
    <el-alert type="warning">欢迎光临</el-alert>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {};
  },
  created(){
    console.log(this.$store,getState())
    this.$store.dispatch('user/setUserName','anrui')
  },
  components: {},

  computed: {
    ...mapGetters(['username'])
  },

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>
<!--  -->
<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  created(){
    console.log('dd',1)
  },
  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang='less' scoped>
#app{
  color:red
}
</style>
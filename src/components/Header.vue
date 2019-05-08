<template>
  <header @click="changeTitle">
    <h1>{{title}}</h1>
    <h2>{{msg}}</h2>
  </header>

</template>

<script>
  export default {
    name: 'app-header',
    data () {
      return {
        title1:"子组件的内容"
      }
    },
    // 父组件可以使用 props 把数据传给子组件
    props:['msg'],  // 用来接收父组件传给子组件的数据
    methods:{
      changeTitle:function(){
        this.$emit("titleChanged","子向父组件传值"); // 子组件可以使用 $emit 触发父组件的自定义事件。
      }
    }
  }
</script>

<style scoped>
  header{
    background: pink;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center;
  }
</style>

<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>
</template>


<script>
  export default {
    data () {
      return {
        copyright:"User.vue页面"
      }
    }
  }
</script>

<style scoped>
  footer{
    background: #666;
    padding: 6px;
  }
  footer p{
    color: pink;
    text-align: center;
  }
</style>

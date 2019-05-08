<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>
</template>


<script>
  export default {
    data () {
      return {
        copyright:"Footer.vue页面"
      }
    }
  }
</script>

<style scoped>
  footer{
    background: #000;
    padding: 6px;
  }
  footer p{
    color: pink;
    text-align: center;
  }
</style>

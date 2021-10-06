<template>
    <h1>{{msg}}</h1>z
</template>

<script>
  export default {
    data(){
      return {
        msg : 'Hello Vue!'
      }
    }
  }
</script>

<style lang="scss">
    $color : orange;
    h1{
        color:$color;
    }
</style>

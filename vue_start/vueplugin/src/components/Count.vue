<template>
  <div class="hello">
    <div>{{counter}}</div>
    <button v-on:click="increase">Click me!</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      counter: 0
    }
  },
  methods : {
    increase(){
      this.counter += 1;
    }
  }
}
</script>

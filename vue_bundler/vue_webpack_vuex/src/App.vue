<!--<template>-->
<!--  <div-->
<!--    class="name"-->
<!--    @click="c"-->
<!--  >-->
<!--    {{ name }}-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--   export default{-->
<!--     data(){-->
<!--       return {-->
<!--         name : 'kozi koder1'-->
<!--       }-->
<!--     },-->
<!--     methods : {-->
<!--        c(){-->
<!--          this.name = 'kozi koder'-->
<!--        }-->
<!--     }-->
<!--  }-->
<!--</script>-->

<template>
    <div
            class="name"
            @click="updateName"
    >
        {{ name }}
    </div>
</template>

<script>
  import {ref} from 'vue';
  export default{
    setup(){
      const name = ref('Kossie Coder1');

      const updateName = () => {
        name.value = 'Kossie Coder'
      }
      return {
        name,
        updateName
      }
    }
  }
</script>


<template>
<div class="app_inner">
    <LNB></LNB>
    <div class="app_page">
        <Header></Header>
        <div class="page_container">
            <RouterView></RouterView>
        </div>
    </div>
</div>
</template>

<script>
    import LNB from './components/LNB.vue'
    import Header from '~/components/Header'
    export default {
      components : {
        LNB,
        Header
      }
    }
</script>

<style lang="scss" scoped>

    .app_inner{
        font-family: 'Noto Sans KR', sans-serif;
        display : flex;
        height: 100vh;
        color:$color-font;
        font-size:14px;
        line-height:1.4;
        .app_page{
            flex-grow:1;
            height:100%;
            display:flex;
            flex-direction:column;
            .page_header{
                height:80px;
            }
            .page_container{
                flex-grow:1;
                //높이값이 크게된다면 scroll 구현
                overflow-y:auto;
            }
        }
    }
</style>

<template>
    <section :key="$route.params.id">
        <div class="inner">
            <div class="title"
                 ref="title"
                 contenteditable
                 placeholder="제목 없음"
                 @input="onInput">
                {{title}}
            </div>
            <div class="content"
                 ref="content"
                 contenteditable
                 placeholder = "내용 입력하세요!"
                @input="onInput"
                v-html="content">
            </div>
        </div>
    </section>
</template>

<script>
    export default{
      computed:{
        title(){
          return this.$store.state.workspace.currentWorkspace.title
        },
        content(){
          return this.$store.state.workspace.currentWorkspace.content
        }
      },
      watch : {
        // 에러 원인 발생하는 곳
        $route(){
          this.$store.dispatch('workspace/readWorkspace',{
            id:this.$route.params.id
          })
          this.$store.dispatch('workspace/findWorkspacePath')
        }
      },
      created(){
        console.log('created')
        this.$store.dispatch('workspace/readWorkspace',{
          id:this.$route.params.id
        })
      },
      methods : {
        onInput(){
          if(!this.$refs.content.textContent.trim()){
            this.$refs.content.innerHTML = ''
          }
          this.$store.dispatch('workspace/updateWorkspace',{
            id:this.$route.params.id,
            title:this.$refs.title.textContent,
            content:this.$refs.content.innerHTML
          })
        }
      }
    }
</script>

<style lang="scss" scoped>
    section{
        padding:100px 0 200px;
        .inner{
            max-width:700px;
            margin:0 auto;
            padding:0 20px;
            [contenteditable]{
                outline:none;
                cursor:text;
                &.title{
                    font-size:44px;
                    font-weight:700;
                    margin-bottom:20px;
                }
                &.content{
                    font-size:16px;
                    line-height:1.8;
                }
                //아무런 텍스트도 없을 때
                &:empty::before{
                    content:attr(placeholder);
                    color:rgba($color-font,.3)
                }
            }
        }
    }

</style>

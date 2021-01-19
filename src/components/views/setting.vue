<template>
  <div class="setting-view">
      <div class="content"></div>
      <div class="songslists">
      </div>
  </div>
</template>

<script>
export default {
    name:'setting',
    data(){
        return {
            /** 歌单列表 */
            songlists:{
                now:'',
                list:[]
            }
        }
    }
}
</script>

<style scoped>

.setting-view{
    width: 100%;
    height: 100%;
    position: relative;
}
.setting-view > .content{
    width:100%;
    height: calc(100% - 50px)
}
.songlists{
    margin: 0 auto;
    width: 100%;
    height: 50px;
}
</style>
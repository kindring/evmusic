<template>
  <div class="switch-list">
      <!-- 内容盒子 -->
      <div class="main-content-box">
          <div class="pointer">

          </div>
      </div>
  </div>
</template>

<script>
// 选择元素后,会将相关的元素的信息传递出来,交给前端进行渲染
export default {
    props:{
        w:{
            default:'160'
        },
        h:{
            default:'35'
        },
        x:{
            default: 0
        },
        y:{
            default: 0
        },
        /** 位置模式 上 下 左 右 上 下 左上 左下 右上 右下 */
        position_mode:{
            default: 'top'
        }
    },
    data(){
        return {
            obj:{
                now:1,
                list:[
                    {
                        id:'1',
                        value: 'loop',
                        text: '循环播放',
                        icon: ''
                    }
                ]
            }
        }
    }
}
</script>

<style>
    .switch-list{
        display: block;
        position:fixed;
        left: 0;
        top: 0;
    }
    .switch-list > .main-content-box{
        display: block;
        position: absolute;
    }
    .switch-list > .main-content-box > .pointer{
        width: ;
    }
</style>
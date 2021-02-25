<template>
  <div class="loopBtn">
      <div class="btn"></div>
      <div class="text"></div>
  </div>
</template>

<script>
export default {
    name:'loopBtn',
    props:{

    },
    data(){
        return {
            defaultData:{
                list:[
                    {
                        id:1,
                        value:'loop',
                        text:'循环播放'
                    }
                ]
            }
        }
    },
    methods:{

    }
}
</script>

<style>

</style>
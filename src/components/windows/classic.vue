<template>
  <div class="window">
    <div class="top-bar">
        <div class="drag"></div>
        <div class="control-box">
            <div class="btn ding"  @click="btnClickHandel('ding')"></div>
            <div class="btn min" @click="btnClickHandel('min')"></div>
            <div class="btn full"  @click="btnClickHandel('full')"></div>
            <div class="btn close"  @click="btnClickHandel('close')"></div>
        </div>
    </div>
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        btnClickHandel(action){
            switch(action){
                case 'min':
                    console.log(this.$ipc);
                    this.$ipc.send('minWin','main');
                    break;
                case 'full':
                    console.log(this.$ipc);
                    this.$ipc.send('maxWin','main');
                    break;
                case 'close':
                    console.log(this.$ipc);
                    this.$ipc.send('exitApp','main');
                    break;
                case 'ding':
                    console.log('置顶窗口');
                    this.$ipc.send('topWin','main');
                    break;
            }
        }
    }
}
</script>

<style scoped>
    .window{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .window > .top-bar{
        width: 100%;
        height: 25px;
        position: absolute;
    }
    .window > .top-bar > *{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .window > .top-bar > .drag{
        -webkit-app-region:drag;
        -webkit-user-select: none;
        z-index: 1;
    }
    .window > .top-bar > .control-box{
        -webkit-app-region:no-drag;
        width: auto;
        height: 100%;
        background: #fff;
        z-index: 9;
        display: flex;
        right: 0;
        left: auto;
        align-items: center;
        border-radius: 0 0 0 10px;
    }
    .window > .top-bar > .control-box > .btn{
        -webkit-app-region:no-drag;
        cursor: pointer;
        margin: 0 15px;
        display: flex;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: relative;
    }
    .ding{
        background-color: darkkhaki;
    }
    .min{
        background-color: aqua;
    }
    .full{
        background-color: lightcoral;
    }
    .close{
        background-color: orangered;
    }
    .window > .content{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
    }
</style>
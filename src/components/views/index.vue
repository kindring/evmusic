<template>
    <div class="main">
        <sidebar v-model="page"/>
        
        <div class="content">
            <div class="path-tips">
                当前页面:{{page}}
            </div>
            <div class="view">
                <Home/>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from 'components/sidebar/sidebar'
import Home from 'components/views/home/home.vue'

export default {
    components:{
        Sidebar,
        Home
    },
    data(){
        return {
            page:1
        }
    },
    
}
</script>

<style scoped>
    .main{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .main > .content{
        width: calc(100% - 40px);
        height: 100%;
        position: relative;
        /** 
        background:  #B71D3F;
        */
        box-sizing: border-box;
        padding: 5px;
    }
    .main > .content .path-tips{
        width: 100%;
        height: 25px;
        position: relative;
    }
    .main > .content .path-tips::before{
        content:'';
        position: absolute;
        transform-origin: 0 0;
        transform: scale(0.5,0.5);
        border-bottom: 1px solid gray;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
    }
    .main > .content .view{
        width: 100%;
        height: calc(100% - 25px);
        background-color: antiquewhite;
        position: relative;
    }
</style>
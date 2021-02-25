<template>
    <div class="main">
        <sidebar v-model="page" :menus="menus"/>
        
        <div class="content">
            <div class="path-tips">
                当前页面:{{page.name}}
            </div>
            <transition name="component-view">

                <component class="view" :is="page.com"/>

            </transition>
        </div>
    </div>
</template>

<script>
import Sidebar from 'components/sidebar/sidebar'
/** 页面数据 */
import Home from 'components/views/home/home.vue'
import setting from 'components/views/setting.vue'
import download from 'components/views/download.vue'
import songList from 'components/views/songList.vue'

export default {
    components:{
        Sidebar,
        Home,
        setting,
        download,
        songList
    },
    data(){
        return {
            /** 页面信息 */
            page:{
                    id:1,
                    com:'home',
                    title:'',
                    name:'主页',
                    src:null
            },
            /** 侧边栏按钮 */
            menus:[
                {
                    id:1,
                    com:'home',
                    title:'',
                    name:'主页',
                    src:null
                },
                {
                    id:2,
                    com:'song-list',
                    title:'',
                    name:'歌单',
                    src:null
                },
                {
                    id:3,
                    com:'download',
                    title:'',
                    name:'下载',
                    src:null
                },
                {
                    id:4,
                    com:'setting',
                    title:'',
                    name:'设置',
                    src:null
                },
            ],

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
        background-color: rgb(243, 241, 238);
        position: relative;
    }
    .component-view-enter-active, .component-view-leave-active {
        transition: all .3s ease;
        transform-style: preserve-3d;
        transform-origin: top;
    }
    .component-view-enter, .component-view-leave-to {
        opacity: 0;
        height: 25px;
        overflow: hidden;
        border-bottom: 1px solid black;
        transform-origin: top;
        transform: rotateX(180deg);

    }
</style>
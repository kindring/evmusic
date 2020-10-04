<template>
  <div class="sidebar">
    <ul class="ul">
        <li v-for="item in menus" :key="item.id" @click="$emit('input',item.name)"
            :class="{
                li:true,
                now:(item.id == 1)
            }"
        >
            {{
                item.name
            }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props:[

    ],
    data(){
        return {
            nowId:1,
            menus:[
                {
                    id:1,
                    title:'',
                    name:'主页',
                    src:null
                },
                {
                    id:2,
                    title:'',
                    name:'歌单',
                    src:null
                },
                {
                    id:3,
                    title:'',
                    name:'下载',
                    src:null
                },
                {
                    id:4,
                    title:'',
                    name:'设置',
                    src:null
                },
            ]
        }
    }
}
</script>

<style>
    .sidebar{
        width: 40px;
        height: 100%;
        position: relative;
        box-sizing: border-box;
    }
    .sidebar > .ul::-webkit-scrollbar{
        width: 2px;
        height: 100%;
        background-color: black;
    }
    .sidebar > .ul::-webkit-scrollbar-thumb{
        width: 2px;
        background-color: orangered;
    }
    .sidebar > .ul{
        width: 100%;
        height: 100%;
        overflow-y: auto;
        box-sizing: border-box;
        padding-top: 0px;
        background-color: black;
        flex-direction: column;
        justify-content: center;
    }
    .sidebar > .ul > .li{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: 1px 1px 3px #B71D3F;
        margin: 10px auto;
        display: flex;
        list-style: none;
        flex-shrink: 0;
        color:  red;
        position: relative;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 0.7em;
        -webkit-user-select:none;
    }
    .sidebar > .ul > .now{
        background-color: #B71D3F;
        color: black;
    }
    .sidebar > .ul > .li:hover{
        background-color: red;
        color: #eee
    }
</style>
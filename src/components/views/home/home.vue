<template>
  <div class="home">
    <div class="search">
        <div class="nav">
            <div class="btn">搜索引擎</div>
            <div class="btn"></div>
            <div class="btn"></div>
        </div>
        <Serach @keychange="keywordsChnage" @search="search"/>
    </div>
  </div>
</template>

<script>
import Serach from 'components/minComponents/search.vue';
export default {
    components:{
        Serach
    },
    methods:{
        keywordsChnage(keywords,cb){
            console.log(keywords)
            console.log(cb)
            cb({
                nameKey:'name',
                idKey:'id',
                arr:[
                    {
                        id:1,
                        name:keywords
                    },
                    {
                        id:2,
                        name:keywords+keywords
                    },
                    {
                        id:3,
                        name:keywords+keywords+keywords
                    },
                    {
                        id:21,
                        name:keywords
                    },
                    {
                        id:22,
                        name:keywords+keywords
                    },
                    {
                        id:33,
                        name:keywords+keywords+keywords
                    },
                    
                    {
                        id:221,
                        name:keywords+'1234'
                    },
                    {
                        id:222,
                        name:keywords+keywords
                    },
                    {
                        id:3223,
                        name:keywords+keywords+keywords
                    },
                    {
                        id:2222,
                        name:keywords+keywords
                    },
                    {
                        id:1234,
                        name:keywords+keywords+keywords
                    }
                ]
            })
        },
        search(keywords){
            console.log('搜索关键字'+keywords)
        }
    }
}
</script>

<style>
    .home{
        width: 100%;
        height: 100%;
    }
    .search{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding-right: 10px;
        align-items: center;
    }
    .search > .nav{
        width: auto;
        height: 30px;
        border-radius: 0 15px 0 0;
        overflow: hidden;
        box-shadow: 1px 1px 3px black;
        padding: 0 5px;
    }
</style>
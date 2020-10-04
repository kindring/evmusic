<template>
  <div class="search-box">
    <input type="text" class="search-input" @keyup="keyup" @focus="inputChange" @click="inputChange = true" @blur="searchHide" v-model="searchKey">
    <button class="search-btn" @click="$emit('search',searchKey)">
        <div class="search-icon">
        </div>
    </button>
    <div class="search-results" v-show="searchShow">
        <ul class="hidebar" ref="ul">

            <li  v-for="(item,i) in searchTips" :key="i+'_'+item[idKey]" :class="{
                result:true,
                now:searchTipsIndex == i
            }">
                <span>
                    {{i+1}}.
                </span> 
                {{item[nameKey]}}
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
// 触发一个v-model事件,进行输入数据的绑定
// 搜索提示事件,防抖-防止连续点击  节流-将一定时间内的函数归纳起来然后进行发送
// 搜索结果点击事件
// let timer = null ;
export default {
    data(){
        return {
            searchKey:'点击搜索些什么吧',//搜索框对应的文字
            searchResultInput:'',//获取关键字中的搜索
            resultLock:true,//搜索提示锁,在此锁打开时拒绝搜索
            searchTips:[],//搜索提示
            searchShow:false,//搜索结果显示
            searchTipsIndex:0,//当前的选择项
            nameKey:'',
            idKey:'',
            time:800,//搜索延迟
            timer:null,
        }
    },
    computed:{
    },
    methods:{
        inputChange(e){
            let value = e.target.value;
            //更改当前的搜索框文字
            this.searchKey = value;
            //点击时立即去获取数据,防抖等功能交给他们
            this.$emit('keychange',this.searchKey,this.getSearchTips)
        },
        //获取搜索提示并且自动渲染到页面中去
        getSearchTips(obj){
            this.searchShow = true//显示搜索提示框
            this.resultLock = true//以及获取到搜索提示,允许继续搜索
            this.nameKey = obj.nameKey;
            this.idKey = obj.idKey;
            this.searchTips = obj.arr;
            for(let i in this.searchTips){
                this.searchTips.shift(i)
            }
            for(let x in obj.arr){
                this.searchTips.unshift(obj.arr[x])
            }
            console.log(obj.arr)
        },
        keyup(e){
            let ulDom = this.$refs.ul;
            // 控制index变化
            if(this.searchTips.length < 1){
                //没有数组，
                return false;
            }
            if(e.keyCode == 38){
                this.searchTipsIndex --;
                this.searchTipsIndex= this.searchTipsIndex < 0?(this.searchTips.length - 1):this.searchTipsIndex;
                ulDom.scrollTop = 30 * this.searchTipsIndex;
                this.searchKey = this.searchTips[this.searchTipsIndex][this.nameKey]
                // console.log('up')
            }else if(e.keyCode == 40){
                this.searchTipsIndex ++;
                this.searchTipsIndex = this.searchTipsIndex >= this.searchTips.length ? this.searchTipsIndex = 0 : this.searchTipsIndex;

                if(this.searchTipsIndex > 7 ){
                    ulDom.scrollTop = 30 * this.searchTipsIndex;
                }else if(this.searchTipsIndex  == 0){
                    ulDom.scrollTop = 30 * this.searchTipsIndex;
                }
                this.searchKey = this.searchTips[this.searchTipsIndex][this.nameKey]
            }else if(e.keyCode == 13){
                console.log('enter')
                this.jumpSearch()
            }else{
                this.$emit('keychange',this.searchKey,this.getSearchTips)
            }
            console.log(this.searchTipsIndex)
            //将ul元素的滚动条滚到到指定位置
        },
        jumpSearch(){
            //获取数据,直接传递事件
            let keywords = this.searchKey;
            this.$emit('search',keywords)
        },
        searchHide(){
            //隐藏窗口,初始化数据
            this.searchResultInput = 0;
            this.searchShow = false;
        }
    }
}
</script>

<style>
    .search-box{
        width: 210px;
        height: 20px;
        border-radius: 25px;
        background-color: aliceblue;
        box-shadow: 1px 1px 3px black;
        position: relative;
        z-index: 3;
    }
    .search-box > .search-results{
        width: 100%;
        height: auto;
        position: absolute;
        left: 0;
        top:16px;
        padding: 5px 10px;
        box-sizing: border-box;
    }
    .search-box .search-input{
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 25px;
        left: 0;
        top: 0;
        outline: none;
        border: 0;
        box-sizing: border-box;
        padding: 0 25px 0 10px;
        color: gray;
        z-index: 2;
    }
    .search-box .search-btn{
        width: 25px;
        height: 25px;
        position: absolute;
        display: block;
        border: 0;
        outline: none;
        border-radius: 50%;
        top: -2.5px;
        right: -2.5px;
        background-color: #6cf;
        z-index: 3;
        cursor: pointer;
        box-shadow: 1px 1px 3px black;
    }
    .search-box .search-input:focus{
        color: black;
    }
    .search-results > ul{
        width: 100%;
        height: auto;
        max-height: 240px;
        display: block;
        box-shadow: 1px 1px 3px black;
        overflow-y: scroll;
        position: relative;
    }
    .now{
        background-color: #6cf;
    }
    .search-results > ul > li{
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: block;
        box-sizing: border-box;
        padding: 0 5px;
        list-style: none;
        white-space:nowrap;
        text-overflow:ellipsis; overflow:hidden;
        border-bottom: 1px solid black;
        cursor: pointer;
    }
    .search-results > ul > li:hover{
        background-color: #e3e3e3;
    }
    .search-results > ul > li > span{
        color:gray;
    }
    .search-results > ul > li:hover > span{
        color: orangered;
    }
    .search-btn:hover .search-icon{
        animation: searchRound 5s;
         
    }
    /** 搜索图标绘制 */
    .search-icon{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .search-icon::before,.search-icon::after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        box-shadow: 0 0 3px black;
    }
     .search-icon::before{
        width: 15px;
        height: 15px;
        border:1px solid orangered;
        box-sizing: border-box;
        border-radius: 50%;
        transform: translate(-35%,-35%);
        left:30%;
        top:30%;
    }
    .search-icon::after{
        width: 10px;
        background-color: orangered;
        border:1px solid orangered;
        transform-origin: center;
        transform: translate(0px,5px) rotate(45deg);
        left:50%;
        top:50%;
    }
    @keyframes searchRound {
        0%{
            transform: translate(0,0) scale(1);
        }
        10%{
            transform: translate(-10%,-10%)  scale(1.3);
        }
        20%{
            transform: translate(-15%,10%)  scale(1.3);
        }
        30%{
            transform: translate(10%,-15%)  scale(1.3);
        }
        
        35%{
            transform: translate(-15%,15%)  scale(1.5);
        }
        40%{
            transform: translate(-20%,20%)  scale(1.5);
        }
        50%{
            transform: translate(-10%,-10%)  scale(1.3);
        }
        60%{
            transform: translate(0%,0%)  scale(1.5);
        }
        70%{
            transform: translate(10%,10%) scale(1.4);
        }
        80%{
            transform: translate(-20%,20%)  scale(1.3);
        }
        90%{
            transform: translate(10%,-10%) scale(1.3);
        }
        100%{
            transform: translate(0%,0%)  scale(1);
        }
    }
</style>
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
        <div class="absolute w-full insert-x-0 bottom-0 h-12 flex justify-center">
            <div class="w-4/5 bg-blue-300 h-full rounded rounded-b-none px-4 flex items-center" >
                <!-- 歌曲图片框 -->
                <div 
                class="highBorder  w-11  h-11 m-1 "
                >
                    <img 
                        class="w-full h-full rounded-full highBorder"
                        :src="song.img" 
                        alt="图片加载失败"
                        >
                </div>
                
                <!-- 歌曲信息框 -->
                <div 
                class="mx-2 w-180px h-12 px-1 overflow-hidden ">
                    <div class="h-8 flex items-center text-xl relative">
                        <div 
                        class="auto-roll whitespace-nowrap px-1 cursor-default"
                        v-autoRoll
                        >
                            {{song.title}}&nbsp;
                            <span class="text-sm text-gray-300 cursor-pointer">
                            &nbsp;&nbsp;--&nbsp;&nbsp;{{song.author}}
                            </span>
                        </div>
                        
                    </div>
                    <div class="h-4 flex items-center text-xs text-gray-400 cursor-pointer">{{song.subTitle}}</div>
                </div>

                <!-- 歌曲控制框 -->
                <div class="btns">

                </div>
            </div>
        </div>

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
    },
    data(){
        return {
            song:{
                title:'冬日恋歌',
                subTitle: '测试一大段文字',
                author: '李大钊',
                img: 'https://s3.ax1x.com/2021/01/18/scScKs.png',
            }
        }
    },
    directives:{
        autoRoll:{
            bind(el){
                // 设置元素的位置属性
                el.style.transition = 'left 5s';
            },
            inserted(el){
                // 获取元素
                let parent = el.parentElement;
                console.log(parent);
                
                // 进行数据编号
                el.style.left = '0';     
                el.style.top = '0';      
                // 上一个的元素,下一个的元素
                let nextNode =  el.cloneNode(true);
                let prevNode =  el.cloneNode(true);
                let nowNode =  el.cloneNode(true);
                nextNode.style.position = 'absolute';
                prevNode.style.position = 'absolute';
                nowNode.style.position = 'absolute';    

                nextNode.style.left = '100%';
                prevNode.style.left = '-100%';
                nowNode.style.left = '0';

                let w = el.offsetWidth;
                w+=15;
                let h = el.offsetHeight;
                console.log(w);
                parent.appendChild(nextNode);
                parent.appendChild(prevNode);
                parent.appendChild(nowNode);
                el.style.opacity = '0'

                let els = {
                    '-1':prevNode,
                    '0':nowNode,
                    '1':nextNode
                }

                let timer = null; 
                // 切换开始
                function autoSetDom(obj){
                    obj['0'].style.left = `-${w}px`;
                    obj['0'].style.zIndex = '0';
                    obj['0'].style.opacity = `${w}px`;

                    obj['-1'].style.left = `${w}px`;
                    obj['-1'].style.zIndex = '-1';


                    obj['1'].style.zIndex = '1';
                    obj['1'].style.left = '0';
                    obj['1'].style.opacity = '1';

                    // 交换dom元素
                    timer = setTimeout(()=>{
                        els['-1'].style.opacity = '0';
                        

                        let el_1 = els['-1'];
                        let el_2 = els['0'];
                        let el_3 = els['1'];

                        els['-1'] = el_2;
                        els['0'] = el_3;
                        els['1'] = el_1;
                        // console.log(obj);
                        autoSetDom(els);
                    },7000);
                }

                parent.addEventListener('mouseenter',()=>{
                    clearInterval(timer);
                    timer=null;
                });
                parent.addEventListener('mouseout',()=>{
                    if(timer == null){
                        autoSetDom(els);
                    }
                })


                autoSetDom(els);
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

    .auto-roll{
        width: auto;
        height: 100%;
    }
    .w-180px{
        width: 180px;
    }

    .highBorder{
        position: relative;
        border-radius: 50%;
        transition: all 0.3s;
        cursor: pointer;
        display: block;
    }
    .highBorder:hover{
        filter: contrast(1.1);
    }
    .highBorder:active{
        filter: contrast(0.9);
    }
    .highBorder::before,.highBorder::after{
        content:'';
        position: absolute;
        display: flex;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border: 2px solid orangered;
        transition: all .5s;
        animation: clippath 3s infinite linear;
        border-radius: 3px;
    }
    .highBorder:hover::after{
        animation: clippath 3s infinite -1.5s linear;
    }
    @keyframes clippath {
        0%,
        100% {
            clip-path: inset(0 0 0 98%);
        }
        
        25% {
            clip-path: inset(0 0 98% 0);
        }
        50% {
            clip-path: inset(0 98% 0 0);
        }
        75% {
            clip-path: inset(98% 0 0 0);
        }
    }
</style>
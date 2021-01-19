class Animate {
    constructor() {
            /** 任务列表 */
            this.task = {
                // 当前目标
            }

        }
        /** 挂载动画组 */
    momentGroup(obj) {
            // 计算总步数 ,视作秒
            let timeNum = obj.time || 1;
            /** 帧数 */
            let fps = obj.fps || 60;
            /** 步数 */
            let stepNum = fps * timeNum;
            stepNum = Math.f

            for (var i = 0; i < obj.tasks.length; i++) {
                let animate_item = arr[i]
                    /** 获取每一步的数据量 */
                let task = {
                        // 操作的dom元素
                        el: animate_item.el,
                        // 要转换数据到的地址
                        target: animate_item.target,
                        // 要进行过渡的属性
                        attr: animate_item.attr,
                    }
                    // 获取属性当前的值
                let nowValue = this.getValue(task.attr);


            }
        }
        /** 获取属性 */
    getValue(el, str) {
        switch (str) {
            case 'width':
            case 'w':
            case 'Width':
                return el.offsetWidth;
                break;
            case 'height':
            case 'h':
            case 'Height':
                return el.offsetHeight;
                break;
            case 'left':
            case 'x':
                return el.offsetLeft;
                break;
            case 'top':
            case 't':
                return el.offsetTop;
                break;
        }
    }

}
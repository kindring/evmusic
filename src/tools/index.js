let reg = require('./reg');

/**
 * 检查某个元素中的指定字段是否存在
 * @param {Object} obj 要被检测的对象
 * @param {Arrar} fields 要检测的键值
 * @returns {boolean}
 */
function checkFieldIsExist(obj, fields) {
    try {
        let flag = true;
        for (let i in fields) {
            let key = fields[i];
            if (obj[key] == null) {
                flag = false;
                return flag;
            }
        }
        return flag
    } catch (e) {
        throw e
    }
}

/** 日志对象 */
let Log = {
    /** 日志数组 */
    logArr: [],
    /**
     * 新建日志
     * @params {String} msg 日志文字
     * @params {'null','err','tips','task'} type 日志类型
     */
    newLog: (msg, type) => {
        let defaultObject = {
            msg: '',
            type: 'null',
        }
        let finalObject = {
            ...defaultObject,
            msg,
            type,
            date: new Date()
        };
        this.logArr.push(finalObject)
    },
    /**
     * 输出日志
     * @params {String} msg 要记录的信息
     * @params {false|true} boolen 是否保存 默认false
     */
    log: (msg, boolen) => {
        console.log(msg);
        if (boolen) {
            this.newLog(msg, 'null');
        }
    },
    /**
     * 输出错误日志
     * @params {String} msg 要记录的信息
     * @params {false|true} boolen 是否保存 默认false
     */
    error: (msg, boolen) => {
        console.log(msg);
        if (boolen) {
            this.newLog(msg, 'error');
        }
    }
}


module.exports = {
    checkFieldIsExist,
    log: Log.log,
    error: Log.error,
    Log,
    reg
}
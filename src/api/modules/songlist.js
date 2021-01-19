import { ipcRenderer } from 'electron'


/**
 * 获取歌单数据
 */
function list(cb) {
    ipcRenderer.send('songlist-list');
    ipcRenderer.on('songlist-list-reply', (event, arg) => {
        if (arg.code == 1) {
            cb(null, arg.data);
        } else {
            // 获取失败,想办法提示错误信息
            cb(arg)
        }
    })
}

/**
 * 新增歌单
 * @param {Object} obj
 * @param {String} obj.title 歌单标题
 * @param {String} obj.descript 歌单介绍
 * @param {String} obj.subTitle 歌单副标题
 * @param {Number} obj.order 歌单排序
 * @param {Function} cb 回调函数 data,err
 */
function add(obj, cb) {
    ipcRenderer.send('songlist-add', obj);
    ipcRenderer.on('songlist-add-reply', (event, arg) => {
        if (arg.code == 1) {
            cb(null, arg.data);
        } else {
            // 获取失败,想办法提示错误信息
            cb(arg)
        }
    })
}

/**
 * 更新歌单
 * @param {Object} obj 
 * @param {String} obj.id 要更新的歌单id
 * @param {object} obj.data 要更新的数据
 * @param {Function} cb 回调函数 data,err
 */
function update(obj, cb) {
    ipcRenderer.send('songlist-update', obj);
    ipcRenderer.on('songlist-update-reply', (event, arg) => {
        if (arg.code == 1) {
            cb(null, arg.data);
        } else {
            cb(arg)
        }
    });
}

/**
 * 获取指定歌单的详细数据
 * @param {*} id 歌单id
 * @param {*} cb 回调函数
 */
function get(id, cb) {
    ipcRenderer.send('songlist-get-detail', id);
    ipcRenderer.on('songlist-get-detail-reply', (event, arg) => {
        if (arg.code == 1) {
            cb(null, arg.data);
        } else {
            cb(arg)
        }
    })
}


export default {
    list,
    get,
    add,
    update
}
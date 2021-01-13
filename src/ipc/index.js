import { ipcMain } from 'electron'
import { checkFieldIsExist, log, error } from '../tools/index'

import db from '../mainProgress/db'

console.log(db);

let winArr = [];

let app = null;
/** 注册窗口句柄,在软件运行后注册到此对象中去 */
function registerWin(win) {
    let defaultWin = {
        sign: null,
        title: '未知窗口',
        descript: '窗口描述文件',
        win: null,
    }
    let finalWin = {...defaultWin, ...win }
    if (checkFieldIsExist(finalWin, ['sign', 'win'])) {
        //窗口挂载成功
        winArr.push(finalWin);
        log('窗口挂载成功');
    } else {
        //窗口挂载失败
        throw '窗口挂载失败';
    }
}

/** 绑定app方便在这里面进行退出操作 */
function registerApp(newapp) {
    app = newapp;
}

/**
 * 查找指定窗口
 * @param {String} sign 窗口标记  
 */
function findWin(sign) {
    let winObj = winArr.find((value) => {
        if (value.sign == sign) {
            return true
        }
    });
    return winObj
}

/**
 * 关闭指定窗口
 * @param {String} sign 窗口标记 
 */
function closeWin(sign) {
    let winObj = findWin(sign);
    try {
        winObj.win.close();
        winObj.win.exit();
        log('关闭窗口: ' + winObj.title);
    } catch (error) {
        log(error);
        log('关闭窗口失败');
    }
}

function minWin(sign) {
    let winObj = findWin(sign);
    try {
        winObj.win.minimize();
        log('关闭窗口: ' + winObj.title);
    } catch (error) {
        log('关闭窗口失败')
    }
}

/** 最大化窗口或者恢复窗口 */
function maxWin(sign) {
    let winObj = findWin(sign);
    try {
        if (!winObj.win.isMaximizable()) {
            winObj.win.maximize();
            log('最大化窗口: ' + winObj.title);
        } else {
            winObj.win.maximize();
            log('恢复窗口: ' + winObj.title);
        }
    } catch (error) {
        log('关闭窗口失败')
    }
}

/** 置顶指定窗口 */
function topWin(sign) {
    let winObj = findWin(sign);
    try {
        if (!winObj.win.isAlwaysOnTop()) {
            winObj.win.setAlwaysOnTop(true, 'normal', 1);
            log('置顶窗口: ' + winObj.title);
            return true;
        } else {
            winObj.win.setAlwaysOnTop(false);
            log('取消置顶:' + winObj.title);
            return false;
        }
    } catch (err) {
        log('置顶窗口失败');
        error(err.message);
        return false;
    }
}


function exit() {
    app.exit();
}
ipcMain.on('closeWin', (event, arg) => {
    closeWin(arg);
    event.reply('closeWin_reply');
});
ipcMain.on('minWin', (event, arg) => {
    minWin(arg);
    event.reply('minWin_reply');
});
ipcMain.on('maxWin', (event, arg) => {
    maxWin(arg);
    event.reply('maxWin_reply');
});
ipcMain.on('topWin', (event, arg) => {
    event.reply('top_win_reply', topWin(arg));
})

ipcMain.on('exitApp', (event, arg) => {
    event.reply('exitApp_reply');
    exit(arg);
});
export default {
    registerWin,
    closeWin,
    minWin,
    maxWin,
    registerApp
}
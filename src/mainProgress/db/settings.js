const fs = require('fs');
const path = require('path');


let setting = require('./defaultSettings.js');
let nowSetting = require('./settings.josn');

/**
 * 重置指定设置
 * @param {String} settingKey 设置的标记
 */
function init(settingKey) {

}


/** 查看设置文件是否符合规范 */
function autoCheckSetting() {

}


module.exports = {
    init
}
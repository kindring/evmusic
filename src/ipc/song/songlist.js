import { ipcMain } from 'electron'
import { checkFieldIsExist, log, error } from '../../tools/index'

import { songList } from '../../mainProgress/db'
/**
 * 获取歌单数据
 */
async function getSongList() {
    let returns = await songList.find()
}

/** 获取歌单数据 */
ipcMain.on('songlist-list', async(event, arg) => {
    try {
        let lists = await songList.find();
        // 回复信息
        event.reply('songlist-list-replay', {
            code: 1,
            data: lists,
            msg: 'ok'
        });
    } catch (error) {
        event.reply('songlist-list-replay', {
            code: 2,
            msg: error.message
        });
    }
});

/** 新增歌单数据 */
ipcMain.on('songlist-add', async(event, arg) => {
    try {
        let lists = await songList.create(arg);
        // 回复信息
        event.reply('songlist-add-replay', {
            code: 1,
            data: lists,
            msg: 'ok'
        });
    } catch (error) {
        event.reply('songlist-add-replay', {
            code: 2,
            msg: error.message
        });
    }
});

/** 删除歌单 */
ipcMain.on('songlist-remove', async(event, arg) => {
    try {
        let lists = await songList.remove(arg.id);
        // 回复信息
        event.reply('songlist-remove-replay', {
            code: 1,
            data: lists,
            msg: 'ok'
        });
    } catch (error) {
        event.reply('songlist-remove-replay', {
            code: 2,
            msg: error.message
        });
    }
});

/** 更新歌单 */
ipcMain.on('songlist-update', async(event, arg) => {
    try {
        let lists = await songList.update(arg.id, arg.data);
        // 回复信息
        event.reply('songlist-update-replay', {
            code: 1,
            data: lists,
            msg: 'ok'
        });
    } catch (error) {
        event.reply('songlist-update-replay', {
            code: 2,
            msg: error.message
        });
    }
});


/** 获取歌单详细信息 */
ipcMain.on('songlist-get-detail', async(event, arg) => {
    try {
        let lists = await songList.find(arg.id);
        // 回复信息
        event.reply('songlist-get-detail-replay', {
            code: 1,
            data: {...lists[0] },
            msg: 'ok'
        });
    } catch (error) {
        event.reply('songlist-get-detail-replay', {
            code: 2,
            msg: error.message
        });
    }
});
// 数据存储接口
const songList = require('./db/songList')

// 所需要存储的数据
// 账号数据
// 文件夹数据
// api数据


/** 设置的存储配置 */
let SettingOption = {
        name: 'setting',
        schema: {
            autoPlay: {
                type: 'Boolean',
            },
            downloadPath: {
                type: 'String',
            },
        }
    }
    /** 设置的存储位置 */
    // let setting = new Store(SettingOption);



/** 歌单存储配置 */
let songListOption = {
    name: 'songList',
    schema: {
        /** 歌单类型 localhost -> 本地 */
        mode: {
            type: 'String',
            default: 'localhost',
            enum: ['localhost']
        },
        /** 歌单地址,支持绝对路径和网络api路径 */
        path: {
            type: 'String',
        },
        /** 歌单的名称,用来显示给前端的 */
        name: {
            type: 'String'
        },
        /** 歌单的唯一标记名称,用来记录歌曲是跟什么歌单相关联 */
        sign: {
            type: 'String'
        }
    }
}

/** 歌单内容配置,支持对歌曲添加标记 */
let songsOption = {

}

module.exports = {
    songList
}
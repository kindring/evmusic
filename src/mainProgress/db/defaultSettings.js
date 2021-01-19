/** 默认设置 */
let defaultSetting = {
    /** 播放控制 */
    play: {
        /** 自动播放歌曲 */
        autoPlay: false,
        /** 播放模式 sigleCycle ->单曲循环 listCycle ->列表循环 noCycle ->不循环 shufflePlay ->随机播放  */
        playMode: 'sigleCycle',
        /** 音量大小 0-100 */
        volume: 100,
    },
    /** 下载控制 */
    download: {
        /** 下载路径  */
        path: 'download/',
        /** 播放时顺便下载资源 */
        playAndDownload: false
    }
}
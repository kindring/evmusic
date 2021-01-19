import type from './type'
import api from '../../api/index'



// 歌单store 
const state = {
    /** 当前的歌单id */
    now_id: '',
    /** 歌单列表 */
    list: [],
    /** 当前页面的歌曲数据 */
    songs: [],
}
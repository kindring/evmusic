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

const getters = {
    /** 歌单数据,用ordernum进行排序 */
    getSonglist: statr => {
        return state.list.sort((a, b) => {
            if (a.order > b.order) {
                return 1
            }
            return -1

        });
    },
    /** 歌单里的歌曲数据,回复总量 */
    getSongs: state => {
        return state.songs;
    }
}


const mutations = {
    /** 添加歌单,歌单直接替换成新的歌单 */
    [type.MA_SET_SONGLIST](state, songlist) {
        state.list = songlist;
    },
    /** 切换歌单,更换当前显示的歌单 */
    [type.MA_SWITCH_SONGLIST](state, song_id) {
        state.now_id = song_id;
    },
    /** 更换歌单数据 */
    [type.MA_UPDATE_SONGLIST_DATA](state, songlist) {
        state.songs = songlist;
    }
}


const actions = {
    /** 获取歌单数据 */
    [type.AC_LOAD_SONGLIST]({ commit, state }, songlist) {
        api.songlist.get((arr) => {
            commit(type.MA_SET_SONGLIST, arr);
        })
    },
}

/** 全局设置模块 */
export default {
    state,
    actions,
    getters,
    mutations
}
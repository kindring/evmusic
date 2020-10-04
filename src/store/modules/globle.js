import * as types from '../type'
const state = {
    bgColor: '#6cf',
    subBgColor: 'orangered',
    subTextColor: 'gray',
    textColor: 'black'
}

const getters = {
    // 背景色
    bgColor(state) {
        return state.bgColor
    },
    //副背景色
    subBgColor(state) {
        return state.bgColor
    },
    // 主文字颜色
    textColor(state) {
        return state.bgColor
    },
    // 副文字颜色
    subTextColor(state) {
        return state.bgColor
    },
}

const mutations = {
    [types.GlOBAL_BGCOLOR](state, color) {
        state.bgColor = color
    },
    [types.GlOBAL_SUBBGCOLOR](state, color) {
        state.subBgColor = color
    },
    [types.GlOBAL_TEXTBGCOLOR](state, color) {
        state.textColor = color
    },
    [types.GlOBAL_SUBTEXTBGCOLOR](state, color) {
        state.subTextColor = color
    }
}

const actions = {
    setbgColor({ commit }, color) {
        commit(types.GlOBAL_BGCOLOR, color)
    }
}
export default {
    state,
    actions,
    getters,
    mutations
}
import { BrowserWindow } from 'electron';

import tool from '../tools/index'
import ipc from '../ipc/index';


function query(sign, Option) {
    let defaultOption = {
        title: '标题',
        sign: null,
        content: '',
        style: '',
        ok: {
            show: true,
            text: '确认',
            handel: () => {}
        },
        cancel: {
            show: true,
            text: '取消',
            handel: () => {}
        }
    };

    let finalOption = {
        ...defaultOption,
        ...Option,
        sign: sign
    }

    if (tool.checkFieldIsExist(finalOption, sign)) {

    }
}
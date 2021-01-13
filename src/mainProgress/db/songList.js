// 歌单数据处理
const nedb = require('nedb');
const joi = require('joi');

const db = new nedb({
    /** 文件名称 */
    filename: 'configs/songList.db',
    /** 自动加载 */
    autoload: true
});

/** 歌单可选类型 */
let modeTypes = ['localhost', 'web']
    /** 数据模型 */
let schema = {
    /** 歌单模式 */
    mode: joi.string().valid(...modeTypes).required().error(new Error(`歌单类型错误${modeTypes.join(' or ')}`)),
    /** 歌单标题 */
    title: joi.string().default('歌单').error(new Error(`歌单标题应为字符串格式`)),
    /** 歌单排序 */
    orderNum: joi.number().default(0).error(new Error('歌单排序应该为数字')),
    path: joi.string().required().error(new Error('必须指定一个歌单路径'))
}

let createSchema = joi.object(schema);
let updateSchema = joi.object({
    ...schema,
    _id: joi.string()
})

/** 新增数据 */
function create(data) {
    return new Promise((resolve, reject) => {
        try {
            // 验证数据合法性
            let finalData = createSchema.validate(data);
            if (finalData.error) {
                reject(finalData.error.message);
                return
            }
            data = finalData.value;
            console.log(data);

            db.insert(data, (err, doc) => {
                if (err) {
                    reject(err);
                    return;
                }
                // 新增成功
                console.log('新增数据成功');
                resolve(doc);
            })
        } catch (err) {
            reject(err.message)
        }
    });
}




/**
 * 查询歌单数据,如果没有id则返回所有数据
 * @param {String} id 
 * @returns {Array}
 */
function find(id) {
    return new Promise((resolve, reject) => {
        let params = id ? {
            '_id': id
        } : {};
        // 全查
        db.find(params, (err, docs) => {
            if (err) {
                reject(err);
                return
            }
            resolve(docs);
        })
    });
}

// find().then(docs => {
//     console.log(docs)
// });

/**
 * 更新歌单数据 单条修改
 * @param {String} id 歌单的id 必须
 * @param {any} data 要被修改的数据对象,必须要是参数内的值
 */
function update(id, data) {
    return new Promise(async(resolve, reject) => {
        if (!id) {
            reject({
                message: '缺少id数据,必须指定id进行修改'
            })
            return;
        }
        try {
            // 先根据id进行查找数据
            /** 初始的数据 */
            let beginData = await find(id);
            if (beginData.length < 1) {
                reject({
                    message: '根据此id无法找到响应的数据,无法进行修改'
                })
                return;
            }
            beginData = beginData[0];
            /** 更新后的数据 */
            let finalData = {...beginData, ...data, _id: id };
            finalData = updateSchema.validate(finalData);
            // 验证数据合法性
            if (finalData.error) {
                reject(finalData.error);
                return;
            }
            finalData = finalData.value

            // 存储数据
            db.update({
                _id: id
            }, finalData, {}, (err, numAffected, affectedDocuments, upsert) => {
                if (err) {
                    reject(err);
                    return;
                }
                // 返回更新后的数据
                resolve(affectedDocuments)
            })
        } catch (error) {
            reject(error);
        }

    });
}

// update('pFguz3j6WDDS6XKF', { title: '测试修改' }).then(val => {
//     console.log('更新数据完成');
// }).catch(err => {
//     console.log(err);
// })







module.exports = {
    create,
    find,
    update
}
/*
 * @Author: pym
 * @Date: 2022-09-23 23:51:18
 * @LastEditors: pym
 * @Description: TODO xxx
 * @LastEditTime: 2022-09-24 00:33:35
 */
module.exports = {
    module: {
        rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
    },
}
'use strict'
const IS_PROD = process.env.NODE_ENV === 'production' ? 2 : 0
module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
        require.resolve('./vue')
    ],
    rules: {
    }
}
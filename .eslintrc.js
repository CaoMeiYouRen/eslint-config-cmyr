const __ERROR__ = process.env.NODE_ENV === 'production' ? 2 : 0
module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        require.resolve('./js'),
    ],
    rules: {
        'no-unused-vars': 0, // 禁止出现未使用过的变量
    },
}

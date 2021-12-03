module.exports = {
    plugins: [
        [
            '@semantic-release/commit-analyzer', // 此处只导入解析规则 parserOpts
            {
                config: 'conventional-changelog-cmyr-config',
            },
        ],
        [
            '@semantic-release/release-notes-generator', // 此处导入解析和生成规则 parserOpts, writerOpts
            {
                config: 'conventional-changelog-cmyr-config',
            },
        ],
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'CHANGELOG.md',
                changelogTitle: '# eslint-config-cmyr',
            },
        ],
        '@semantic-release/npm',
        [
            '@semantic-release/github',
        ],
        [
            '@semantic-release/git',
            {
                assets: [
                    'index.js',
                    'vue.js',
                    'vue3.js',
                    'js.js',
                    'browser.js',
                    'react.js',
                    'CHANGELOG.md',
                    'package.json',
                ],
            },
        ],
    ],
}
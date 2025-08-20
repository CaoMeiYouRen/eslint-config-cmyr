# eslint-config-cmyr

# [2.0.0-beta.6](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v2.0.0-beta.5...v2.0.0-beta.6) (2025-08-20)


### ✨ Features

* 更新 ESLint 配置，添加对 JS、TS 和 Vue 文件的支持，优化全局变量设置 ([4cfce9b](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/4cfce9b))
* 重构 ESLint 配置，提取公共变量和选项到 utils.js，简化各个配置文件 ([e17d5a9](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/e17d5a9))


### 🐛 Bug Fixes

* 更新 ESLint 配置，添加对 Vue 文件的支持 ([b09cd16](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/b09cd16))
* 添加项目主页、仓库和问题跟踪链接到 package.json ([ee809c3](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/ee809c3))

# [2.0.0-beta.5](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v2.0.0-beta.4...v2.0.0-beta.5) (2025-08-18)


### ✨ Features

* 优化 import 插件配置，添加条件加载并更新依赖项 ([0c5a2bd](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/0c5a2bd))
* 新增 import 相关规则支持 ([3c9601b](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/3c9601b))


### 🐛 Bug Fixes

* 调整 import 顺序，确保依赖项正确加载 ([d51c155](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/d51c155))

# [2.0.0-beta.4](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v2.0.0-beta.3...v2.0.0-beta.4) (2025-08-17)


### ✨ Features

* 更新 Nuxt.js ESLint 配置，新增支持的文件类型，并替换测试文件 ([58da0b1](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/58da0b1))

# [2.0.0-beta.3](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2025-08-17)


### ✨ Features

* 添加 Nuxt.js 配置支持，并更新 package.json 以包含相关文件和测试命令 ([5792ca2](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/5792ca2))

# [2.0.0-beta.2](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2025-08-17)


### 🐛 Bug Fixes

* 更新 Vue.js ESLint 规则，添加多项新规则以增强代码质量 ([6b72b44](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/6b72b44))
* 注释掉部分 ESLint 规则以调整代码检查策略 ([5dadf88](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/5dadf88))
* 添加 ESLint 规则以增强代码质量和一致性 ([edead76](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/edead76))
* 添加对 TS/TSX 文件的支持，并新增测试文件 ([a39b458](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/a39b458))

# [2.0.0-beta.1](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.33...v2.0.0-beta.1) (2025-08-17)


### ✨ Features

* 更新 ESLint 版本到 v9 ([2bb2aa7](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/2bb2aa7))
* 更新 ESLint 配置，添加 js 插件和全局变量支持；更新依赖项 ([cacd73c](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/cacd73c))
* 更新 ESLint 配置，添加对 JSX 和 TypeScript 文件的支持；优化文件路径配置 ([270afbf](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/270afbf))
* 添加 stylistic 相关配置 ([e9d79fd](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/e9d79fd))
* 添加 Vue.js ESLint 配置文件，支持 TypeScript 和 JSX 语法 ([d4a6f8d](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/d4a6f8d))
* 添加浏览器、React 和 Vue.js 的 ESLint 配置文件，优化规则和插件支持 ([a47063e](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/a47063e))


### 🐛 Bug Fixes

* 修复测试脚本中的 ESLint 配置文件路径；更新 ts.test.ts 中的函数返回类型 ([aeda299](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/aeda299))
* 更新 Node.js 版本要求至 >=16 ([e27c337](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/e27c337))
* 移除未使用的依赖，修改 peerDependencies 要求 ([5e9d8b0](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/5e9d8b0))
* 统一 ESLint 配置中的规则格式，确保一致性；添加 stylistic 自定义配置 ([b2ab496](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/b2ab496))


### 💥 BREAKING CHANGES

* 更新 ESLint 版本到 v9，不再支持低版本 ESLint

## [1.1.33](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.32...v1.1.33) (2025-03-13)


### 🐛 Bug Fixes

* 限制 eslint 版本范围为 >=6 <9 ([08715c0](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/08715c0))

## [1.1.32](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.31...v1.1.32) (2024-09-24)


### 🐛 Bug Fixes

* 忽略 @typescript-eslint/indent 配置 ([66aaf69](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/66aaf69))

## [1.1.31](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.30...v1.1.31) (2024-05-30)


### 🐛 Bug Fixes

* 禁用 import/default ([6b63ea0](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/6b63ea0))

## [1.1.30](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.29...v1.1.30) (2023-09-11)


### 🐛 Bug Fixes

* 修改 日志为 log ([21c5d91](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/21c5d91))

## [1.1.29](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.28...v1.1.29) (2023-09-02)


### 🐛 Bug Fixes

* 新增 eslint-plugin-import 支持 ([68ee527](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/68ee527))

## [1.1.28](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.27...v1.1.28) (2023-04-05)


### 🐛 Bug Fixes

* 修改 @typescript-eslint/no-redeclare 规则为 warn ([b1b1f10](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/b1b1f10))

## [1.1.27](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.26...v1.1.27) (2023-03-24)


### 🐛 Bug Fixes

* 修复 eslint 版本过低时的 env 不支持 bug；优化 vue rules 生成 ([1327e8f](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/1327e8f))

## [1.1.26](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.25...v1.1.26) (2023-03-23)


### 🐛 Bug Fixes

* 修改 ts 默认 ecmaVersion 版本为 latest ([25bf5c0](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/25bf5c0))

## [1.1.25](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.24...v1.1.25) (2023-03-23)


### 🐛 Bug Fixes

* 添加 test 文件 ([01b7409](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/01b7409))

## [1.1.24](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.23...v1.1.24) (2022-11-27)


### 🐛 Bug Fixes

* 更改 @typescript-eslint/prefer-as-const 的错误级别 ([9eedc10](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/9eedc10))

## [1.1.23](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.22...v1.1.23) (2022-07-27)


### 🐛 Bug Fixes

* 优化 vue 相关规则 ([11f5ef9](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/11f5ef9))

## [1.1.22](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.21...v1.1.22) (2022-07-27)


### 🐛 Bug Fixes

* 新增 vue/no-v-text-v-html-on-component 规则 ([66728f1](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/66728f1))

## [1.1.21](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.20...v1.1.21) (2022-07-15)


### 🐛 Bug Fixes

* 新增 vue/multi-word-component-names 配置 ([caf3098](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/caf3098))

## [1.1.20](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.19...v1.1.20) (2022-05-30)


### 🐛 Bug Fixes

* 设置 peerDependenciesMeta ([9172514](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/9172514))

## [1.1.19](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.18...v1.1.19) (2022-05-27)


### 🐛 Bug Fixes

* 修改 部分 peerDependencies 为 optionalDependencies ([3babde4](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/3babde4))

## [1.1.18](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.17...v1.1.18) (2022-03-29)


### 🐛 Bug Fixes

* 修复 vue/max-attributes-per-line 的  allowFirstLine 错误 ([e8c4cf1](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/e8c4cf1))

## [1.1.17](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.16...v1.1.17) (2022-02-01)


### 🐛 Bug Fixes

* 修复 全局变量缺失 globalThis ([ae94196](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/ae94196))

## [1.1.16](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.15...v1.1.16) (2022-01-16)


### 🐛 Bug Fixes

* 禁用 require-await 规则 ([d2843f2](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/d2843f2))

## [1.1.15](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.14...v1.1.15) (2021-12-22)


### 🐛 Bug Fixes

* 更新 ES 版本为 2022；恢复 peerDependencies；更新 conventional-changelog-cmyr-config ([363770e](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/363770e))

## [1.1.14](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.13...v1.1.14) (2021-11-28)


### 🐛 Bug Fixes

* 调整部分规则，禁用 max-len 、max-lines、max-lines-per-function 等规则；修改部分规则的级别 ([d7f9b25](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/d7f9b25))

## [1.1.13](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.12...v1.1.13) (2021-11-11)


### 🐛 Bug Fixes

* 移除 peerDependencies ([f56d372](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/f56d372))

## [1.1.12](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.11...v1.1.12) (2021-09-10)


### 🐛 Bug Fixes

* add one-var rule ([f63c1a8](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/f63c1a8))

## [1.1.11](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.10...v1.1.11) (2021-03-20)


### 🐛 Bug Fixes

* 修改 no-redeclare 相关规则 ([f83dac9](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/f83dac9))

## [1.1.10](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.9...v1.1.10) (2021-03-14)


### 🐛 Bug Fixes

* 新增规则 array-element-newline ([0668fde](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/0668fde))

## [1.1.9](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.8...v1.1.9) (2021-03-09)


### 🐛 Bug Fixes

* 不允许不必要的括号 ([4aad20b](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/4aad20b))

## [1.1.8](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.7...v1.1.8) (2021-03-06)


### 🐛 Bug Fixes

* 修复 禁止冗余的括号规则 ([984fd97](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/984fd97))

## [1.1.7](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.6...v1.1.7) (2021-02-27)


### 🐛 Bug Fixes

* fix @typescript-eslint/brace-style ([d2d3574](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/d2d3574))

## [1.1.6](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.5...v1.1.6) (2021-02-27)


### 🐛 Bug Fixes

* 修复 no-unused-vars ([86d057d](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/86d057d))

## [1.1.5](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.4...v1.1.5) (2021-02-27)


### 🐛 Bug Fixes

* 修复 typescript 下 no-shadow bug；新增规则 ([633993c](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/633993c))

## [1.1.4](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.3...v1.1.4) (2021-02-23)


### 🐛 Bug Fixes

* 修改函数定义中最大参数个数 ([27fa885](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/27fa885))

## [1.1.3](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.2...v1.1.3) (2021-02-19)


### 🐛 Bug Fixes

* 修改缩进 rule ([d493aa2](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/d493aa2))

## [1.1.2](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.1...v1.1.2) (2021-02-07)


### 🐛 Bug Fixes

* 新增js规则；修改前置依赖为eslint-config-react-app ([a9410c0](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/a9410c0)), closes [#5](https://github.com/CaoMeiYouRen/eslint-config-cmyr/issues/5)

## [1.1.1](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.1.0...v1.1.1) (2021-02-06)


### 🐛 Bug Fixes

* 新增 space-before-blocks 规则 ([c654350](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/c654350))

# [1.1.0](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.0.10...v1.1.0) (2021-01-17)


### ✨ Features

* 新增 react 支持 ([2c6f8a9](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/2c6f8a9))

## [1.0.10](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.0.9...v1.0.10) (2021-01-02)


### 🐛 Bug Fixes

* 修改 no-unused-vars、max-lines-per-function ([bcdc137](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/bcdc137))

## [1.0.9](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.0.8...v1.0.9) (2020-12-31)


### 🐛 Bug Fixes

* 新增代码行数相关规则 ([40b15e4](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/40b15e4))

## [1.0.8](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.0.7...v1.0.8) (2020-12-29)


### 🐛 Bug Fixes

* 修复 browser.js bug ([53ec09a](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/53ec09a))

## [1.0.7](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.0.6...v1.0.7) (2020-12-26)


### 🐛 Bug Fixes

* 修改 'arrow-parens'、'no-console'、'no-sync'等规则 ([c732a8c](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/c732a8c))

## [1.0.6](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.0.5...v1.0.6) (2020-12-19)


### 🐛 Bug Fixes

* 新增 jest 环境 ([c3404c5](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/c3404c5))

## [1.0.5](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.0.4...v1.0.5) (2020-12-16)


### 🐛 Bug Fixes

* 新增 禁止空代码块，禁止出现未使用过的变量为 warn ([0c20782](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/0c20782))

## [1.0.4](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.0.3...v1.0.4) (2020-12-15)


### 🐛 Bug Fixes

* 新增 禁用同步方法、要求使用剩余参数、禁用嵌套的三元表达式 ([4658f3c](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/4658f3c))

## [1.0.3](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.0.2...v1.0.3) (2020-12-09)


### 🐛 Bug Fixes

* 新增 规则 ([ceb0f62](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/ceb0f62))

## [1.0.2](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.0.1...v1.0.2) (2020-11-17)


### 🐛 Bug Fixes

* 回退尾拖逗号风格 ([fe92299](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/fe92299)), closes [#2](https://github.com/CaoMeiYouRen/eslint-config-cmyr/issues/2)

## [1.0.1](https://github.com/CaoMeiYouRen/eslint-config-cmyr/compare/v1.0.0...v1.0.1) (2020-11-06)


### 🐛 Bug Fixes

* 移除 vue/block-tag-newline ([6152ace](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/6152ace))

# 1.0.0 (2020-11-06)


### 🐛 Bug Fixes

* 修复bug ([9adc9ad](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/9adc9ad))
* 修复不兼容规则 ([9876ba8](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/9876ba8))
* 修复错误 ([e99b686](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/e99b686))
* 修复风格 ([0c649b5](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/0c649b5))
* 移除不兼容的规则 ([698b597](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/698b597))
* 移除不兼容规则 ([246dfad](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/246dfad))
* 移除分隔符 ([98f4b27](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/98f4b27))
* 移除组件命名规则 ([6be653a](https://github.com/CaoMeiYouRen/eslint-config-cmyr/commit/6be653a))

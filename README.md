# eslint-config-cmyr

<p>
    <a href="https://github.com/CaoMeiYouRen/eslint-config-cmyr" target="_blank">
        <img alt="Version" src="https://img.shields.io/github/package-json/v/CaoMeiYouRen/eslint-config-cmyr" /></a>
    <a href="https://www.npmjs.com/package/eslint-config-cmyr" target="_blank">
        <img alt="npm publish" src="https://img.shields.io/npm/dt/eslint-config-cmyr?label=npm%20downloads&color=yellow">
    </a>
    <a href="https://github.com/CaoMeiYouRen/eslint-config-cmyr/actions?query=workflow%3ARelease" target="_blank">
        <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/CaoMeiYouRen/eslint-config-cmyr/release.yml?branch=master" /></a>
    <img alt="node-current"  src="https://img.shields.io/node/v/eslint-config-cmyr" />
    <a href="https://github.com/CaoMeiYouRen/eslint-config-cmyr#readme" target="_blank">
        <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" /></a>
    <a href="https://github.com/CaoMeiYouRen/eslint-config-cmyr/graphs/commit-activity" target="_blank">
        <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" /></a>
    <a href="https://github.com/CaoMeiYouRen/eslint-config-cmyr/blob/master/LICENSE" target="_blank">
        <img alt="License: MIT" src="https://img.shields.io/github/license/CaoMeiYouRen/eslint-config-cmyr" /></a>
</p>

## 草梅友仁个人使用的 eslint 检测规范

支持 ESLint v9+ 的扁平化配置（Flat Config）

```sh
"lint": "cross-env NODE_ENV=production eslint src --fix"
```

## 风格理念

1. 若无必要，勿增实体。
2. 如果某元素可有可无，则无
3. 若移除某元素会导致 bug ，则留，否则无

## 安装

```bash
# 前置依赖
npm install typescript eslint --save-dev
# 安装 eslint-config-cmyr
npm install eslint-config-cmyr --save-dev
```

## 配置

### ESLint v9+ （推荐）

使用新的扁平化配置格式：

```js
// eslint.config.js
import { defineConfig } from "eslint/config";
import cmyr from "eslint-config-cmyr";

export default defineConfig([cmyr]);
```

### 不同环境的配置

#### TypeScript 项目（默认）

```js
// eslint.config.js
import { defineConfig } from "eslint/config";
import cmyr from "eslint-config-cmyr";

export default defineConfig([cmyr]);
```

#### Vue 项目

```bash
npm install typescript eslint eslint-plugin-vue eslint-config-cmyr --save-dev
```

```js
// eslint.config.js
import { defineConfig } from "eslint/config";
import cmyr from "eslint-config-cmyr/vue";

export default defineConfig([cmyr]);
```

#### React 项目

```bash
npm install typescript eslint eslint-plugin-react eslint-config-cmyr --save-dev
```

```js
// eslint.config.js
import { defineConfig } from "eslint/config";
import cmyr from "eslint-config-cmyr/react";

export default defineConfig([cmyr]);
```

#### Browser 项目

```js
// eslint.config.js
import { defineConfig } from "eslint/config";
import cmyr from "eslint-config-cmyr/browser";

export default defineConfig([cmyr]);
```

#### Nuxt 项目

```bash
npm install typescript eslint eslint-plugin-vue eslint-config-cmyr @nuxt/eslint --save-dev
```

```ts
// nuxt.config.ts;
export default defineNuxtConfig({
    modules: ["@nuxt/eslint"],
    eslint: {
        config: {
            standalone: false,
        },
    },
});
```

```js
// eslint.config.js
import cmyrConfig from "eslint-config-cmyr/nuxt";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(cmyrConfig, {
    rules: {},
});
```

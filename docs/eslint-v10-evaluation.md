# ESLint v10 升级评估

更新时间：2026-05-25

## 结论

当前不建议直接把 `eslint` 和 `@eslint/js` 升级到 v10 并发布到主线。

原因不是配置格式落后，而是发布后的兼容边界会明显变化：

1. ESLint v10 需要更高的 Node.js 版本。
2. 当前仓库依赖的部分核心插件还没有在稳定版中声明支持 ESLint v10。
3. `eslint:recommended` 在 v10 中有行为变化，作为配置包升级会直接影响使用方项目。

如果后续要正式升级，这次变更应按 major 版本处理。

## 已确认事实

### 1. 配置格式本身不是阻塞项

仓库已经使用 Flat Config：

1. 根配置入口是 `eslint.config.js`。
2. `index.js` 使用 `@eslint/js`、`eslint-plugin-import`、`typescript-eslint` 的 flat 配置。
3. `react.js` 和 `vue.js` 也都在使用对应插件的 flat 配置入口。

因此，ESLint v10 文档里“旧 eslintrc 配置格式不再支持”这一条，对当前仓库不是主要风险。

### 2. Node.js 支持范围会变成真正的 breaking change

根据 ESLint 官方迁移文档，v10 仅支持以下 Node.js 范围：

1. `^20.19.0`
2. `^22.13.0`
3. `>=24`

当前仓库的 `package.json` 仍声明 `node >=18`。如果升级到 ESLint v10，需要同步上调包的 Node.js 支持范围，否则文档、元数据与真实运行要求会不一致。

### 3. 当前稳定生态里仍有插件支持缺口

已核对当前仓库使用到的主要依赖：

1. `typescript-eslint` 已声明支持 ESLint v10。
2. `eslint-plugin-vue` 已声明支持 ESLint v10。
3. `vue-eslint-parser` 已声明支持 ESLint v10。
4. `@stylistic/eslint-plugin` 已声明支持 ESLint v10。
5. `eslint-plugin-import` 当前稳定版 peerDependencies 仍只声明支持到 ESLint v9。
6. `eslint-plugin-react` 当前稳定版 peerDependencies 仍只声明支持到 ESLint v9。

由于当前配置明确使用了 `eslint-plugin-import` 和 `eslint-plugin-react`，这两个包是正式升级 ESLint v10 的主要阻塞项。

### 4. `eslint:recommended` 的变更会影响使用方

当前默认配置继承了 `@eslint/js` 的 `recommended` 配置。ESLint v10 迁移文档指出，`eslint:recommended` 新增了以下规则：

1. `no-unassigned-vars`
2. `no-useless-assignment`
3. `preserve-caught-error`

当前仓库没有对这三条规则做统一覆盖，因此一旦升级，使用方项目与仓库测试样例都可能出现新的 lint 报告。这属于配置行为变化，不应按普通 patch/minor 处理。

## 当前建议

### 维持现状

短期内继续保持：

1. `eslint` 维持 v9。
2. `@eslint/js` 维持 v9。
3. 文档继续宣称支持 ESLint v9+ 的 Flat Config。

### 可以提前准备的事项

在正式迁移前，优先做以下准备：

1. 关注 `eslint-plugin-import` 的 ESLint v10 支持发布。
2. 关注 `eslint-plugin-react` 的 ESLint v10 支持发布。
3. 在实验分支验证 Node.js 最低版本提升到 `20.19` 后的安装、lint、test、build 流程。
4. 评估 `eslint:recommended` 新增规则对现有测试样例和用户项目的影响。

## 本轮顺手修正

本次评估同时确认了一个独立问题：当前仓库 `package.json` 中的 `vue-eslint-parser` 版本范围低于 `eslint-plugin-vue@10.9.1` 的 peer 要求。

已修正为：

1. `vue-eslint-parser` 从 `^10.2.0` 提升到 `^10.3.0`。

这项修正与 ESLint v10 迁移无直接依赖，属于现有依赖元数据对齐。
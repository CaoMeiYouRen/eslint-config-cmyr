# ESLint v10 升级评估

更新时间：2026-11-22

## 结论

当前仓库不建议直接把 `eslint` 和 `@eslint/js` 升级到 v10 并发布到主线。配置格式本身已经兼容，但仍有三类边界需要按 major 版本处理：

1. `eslint-plugin-react` 与 `eslint-plugin-import` 的稳定版仍未声明支持 ESLint v10。
2. ESLint v10 提高了 Node.js 最低版本，当前 `engines.node >=18` 需要同步调整。
3. `eslint:recommended` 在 v10 中新增规则，升级会直接影响使用方项目。

其中 React 入口存在确定的运行时崩溃；非 React 入口在实测中可以运行，但依赖声明仍不被插件官方支持。

## 实测结果（2026-11-22）

在临时副本中安装以下版本进行验证：

1. `eslint@10.15.0`
2. `@eslint/js@10.0.1`
3. `@stylistic/eslint-plugin@5.10.0`
4. `typescript-eslint@8.73.0`
5. `eslint-plugin-vue@10.12.1`
6. `vue-eslint-parser@10.4.2`

结果：

1. 通过：`test:js`、`test:ts`、`test:strict`、`test:browser`、`test:vue`、`test:vue:strict`、`test:nuxt`、`test:nuxt:strict`、`lint`、`build`。
2. 失败：`test:tsx`、`test:react:strict`，报错 `TypeError: Error while loading rule 'react/display-name': contextOrFilename.getFilename is not a function`。
3. 将 React 版本探测从 `settings.react.version: 'detect'` 改为固定版本后，React 两个入口也能通过。这说明崩溃点是 `eslint-plugin-react@7.37.5` 的版本探测逻辑，但该插件仍未声明支持 v10，不能视为正式兼容。
4. `eslint-plugin-import@2.32.0` 在当前配置使用的规则下可以运行；但其 `import/order` 的注释与换行处理路径仍调用 v10 已移除的 `sourceCode.getTokenOrCommentBefore/After`，启用相关选项时存在崩溃风险。

## 依赖支持状态

已核对当前仓库使用到的主要依赖：

1. `typescript-eslint`：`>=8.70.0` 声明支持 ESLint v10。
2. `eslint-plugin-vue`：`>=10.11.1` 声明支持 ESLint v10。
3. `vue-eslint-parser`：`>=10.3.0` 声明支持 ESLint v10。
4. `@stylistic/eslint-plugin`：`>=5.10.0` 声明支持 ESLint v10；继续使用 v5 即可，不需要升级到 v6。v6 会与 `eslint-plugin-vue` 的 peer 范围冲突，并产生规则弃用提示。
5. `eslint-plugin-import@2.32.0`：peerDependencies 仍只声明支持到 ESLint v9。
6. `eslint-plugin-react@7.37.5`：peerDependencies 仍只声明支持到 ESLint v9.7。

由于当前配置明确使用了 `eslint-plugin-import` 和 `eslint-plugin-react`，这两个包是正式升级 ESLint v10 的主要阻塞项。

## Node.js 支持范围

ESLint v10 仅支持以下 Node.js 范围：

1. `^20.19.0`
2. `^22.13.0`
3. `>=24`

当前仓库的 `package.json` 仍声明 `node >=18`。如果升级到 ESLint v10，需要同步上调包的 Node.js 支持范围，否则文档、元数据与真实运行要求会不一致。

## `eslint:recommended` 的变更

当前默认配置继承了 `@eslint/js` 的 `recommended` 配置。ESLint v10 迁移文档指出，`eslint:recommended` 新增了以下规则：

1. `no-unassigned-vars`
2. `no-useless-assignment`
3. `preserve-caught-error`

当前仓库没有对这三条规则做统一覆盖，因此一旦升级，使用方项目与仓库测试样例都可能出现新的 lint 报告。这属于配置行为变化，不应按普通 patch/minor 处理。仓库自身的 `lint` 在实测中未因这三条规则报错，但使用方项目无法保证。

## 当前建议

### 维持现状

短期内继续保持：

1. `eslint` 维持 v9。
2. `@eslint/js` 维持 v9。
3. 文档继续宣称支持 ESLint v9+ 的 Flat Config。

### 正式升级时的工作项

决定支持 ESLint v10 时，建议按 major 版本发布，并完成：

1. 将 `eslint`、`@eslint/js` 升级到 v10，`engines.node` 调整为 `^20.19.0 || ^22.13.0 || >=24`。
2. 将 `peerDependencies.eslint` 调整为 `^9.0.0 || ^10.0.0`（双支持）或 `^10.0.0`（只支持 v10）。
3. 将 `typescript-eslint` 提升到 `^8.73.0`，`vue-eslint-parser` 提升到 `^10.4.2`，`eslint-plugin-vue` 提升到 `^10.12.1`。
4. `@stylistic/eslint-plugin` 保持 `^5.10.0`，不要升级到 v6。
5. 明确处理 `eslint:recommended` 新增规则，避免使用方项目被动产生大量新报告。
6. React 入口等待 `eslint-plugin-react` 发布支持 v10 的版本；在此之前不要把 React 入口标记为支持 v10。若必须提前支持，需要固定 `settings.react.version`，并明确标注为临时方案。
7. `eslint-plugin-import` 等待支持 v10 的稳定版发布；或评估迁移到 `eslint-plugin-import-x`，但这是一次独立的破坏性变更。

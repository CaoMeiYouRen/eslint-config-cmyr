# eslint-config-cmyr 严格模式设计方案

## 文档目的

本文档用于规划在 `eslint-config-cmyr` 中新增严格模式入口 `strict.js`，将当前默认配置中的高强度 TypeScript 类型检查能力从主入口中拆分出来，降低旧项目和低约束项目的接入成本，同时为高质量项目提供更严格的可选配置。

## 背景与问题

当前默认入口 `index.js` 同时承担了以下两类职责：

1. 基础 JavaScript / TypeScript 代码规范。
2. 启用依赖类型信息的 TypeScript 规则。

结合当前实现，默认配置存在两个明显特征：

1. `index.js` 在 TypeScript 文件上直接继承了 `tseslint.configs.recommendedTypeChecked` 与 `tseslint.configs.stylisticTypeChecked`。
2. `index.js` 通过 `projectService.defaultProject = 'tsconfig.json'` 和 `tsconfigRootDir = process.cwd()` 启用了类型感知规则所需的工程级配置。

这会带来一个兼容性问题：当使用方项目较旧、TypeScript 配置不完整、依赖版本偏老，或者只是希望先接入基础 lint 而不想立即承担类型感知规则成本时，默认入口会因为类型检查链路过于严格而直接报错，影响接入体验。

## 设计目标

1. 保留 `index.js` 作为默认入口，继续提供必要且通用的 ESLint 规则。
2. 新增 `strict.js` 作为严格模式入口，专门承载高要求的 TypeScript 规则。
3. 为 Vue、Nuxt、React 等现有环境入口补充对应的严格模式版本。
4. 严格模式下禁用 `any`，并尽可能提高代码质量要求。
5. 为减少一次性引入过多阻塞，严格模式优先采用 `warning` 提示，而不是额外新增大量 `error`。
6. 谨慎使用环境变量，只有少量在开发阶段噪音较高、容易误判的规则才允许按环境动态调整。
7. 发布产物、包导出、测试命令和文档说明都要能覆盖新入口。

## 非目标

1. 不改变现有 Vue、React、Browser、Nuxt 配置的总体对外使用方式。
2. 不在本次方案中引入与严格模式无关的大规模规则重构。
3. 不追求把所有 TypeScript 最佳实践一次性强制为 `error`。
4. 不把“开发环境默认关闭大部分规则”作为配置策略。

## 总体设计

### 方案摘要

采用“双层配置”设计：

1. 默认入口 `index.js` 负责基础规则和兼容性优先的 TypeScript 规则。
2. 新入口 `strict.js` 基于默认入口叠加严格规则，面向对类型安全和代码质量要求更高的项目。
3. `react.js`、`vue.js`、`nuxt.js` 继续承担各自框架的默认规则入口。
4. 为上述框架入口分别提供严格模式变体，在继承原环境规则的同时叠加统一的 TypeScript 严格层。

### 环境入口设计

为保持默认入口路径稳定，并让严格模式的命名更直观，建议采用“环境入口 + strict 子路径”的对外导出方式：

1. 根 TypeScript 严格模式：`eslint-config-cmyr/strict`
2. React 严格模式：`eslint-config-cmyr/react/strict`
3. Vue 严格模式：`eslint-config-cmyr/vue/strict`
4. Nuxt 严格模式：`eslint-config-cmyr/nuxt/strict`

内部实现可以继续使用扁平文件命名，例如：

1. `strict.js`
2. `react-strict.js`
3. `vue-strict.js`
4. `nuxt-strict.js`

这样既能保持发布结构简单，也能让用户侧导入路径语义明确。

### 配置分层原则

#### 默认模式 `index.js`

默认模式只保留“必要规则”，重点满足以下诉求：

1. 新项目可直接使用。
2. 旧项目接入成本更低。
3. 不依赖完整类型信息即可完成大部分 lint。

建议默认模式保留以下内容：

1. 当前已有的 JavaScript 基础规则。
2. 当前已有的样式规则与 import 规则。
3. TypeScript 基础规则，但避免把高强度、类型感知型规则作为默认必选项。

默认模式建议调整为：

1. 保留 `tseslint.configs.recommended`。
2. 从默认入口移除 `tseslint.configs.recommendedTypeChecked` 与 `tseslint.configs.stylisticTypeChecked`。
3. 默认入口不再强依赖 `projectService`。
4. 保留少量无需类型信息即可工作的 TypeScript 规则，例如：
   - `@typescript-eslint/no-unused-vars`
   - `@typescript-eslint/no-redeclare`
   - `@typescript-eslint/no-empty-function`
   - `@typescript-eslint/no-require-imports`
   - `@typescript-eslint/prefer-as-const`

这样可以从根因上解决“默认模式过严导致旧项目直接 lint 失败”的问题。

#### 严格模式 `strict.js`

严格模式建立在默认模式之上，聚焦高质量 TypeScript 项目，具备以下特点：

1. 启用依赖类型信息的规则。
2. 对 `any` 和不安全操作进行更强约束。
3. 以 `warning` 为主，避免过多新增阻塞型 `error`。

建议 `strict.js` 的组合方式如下：

1. `extends: [indexConfig]`，复用默认配置。
2. 为 `ts/tsx/mts/cts` 文件追加严格 TypeScript 规则层。
3. 在严格层中重新启用 `projectService` 与 `tsconfigRootDir`。

#### 环境严格模式

针对 React、Vue、Nuxt 等环境入口，严格模式应遵循“环境配置优先，严格层后置叠加”的原则：

1. `react strict` 在 `react.js` 基础上追加统一的 TypeScript 严格层。
2. `vue strict` 在 `vue.js` 基础上追加统一的 TypeScript 严格层，并覆盖 `.vue` 文件。
3. `nuxt strict` 在 `nuxt.js` 基础上追加统一的 TypeScript 严格层，并兼容 `.vue` 文件与 Nuxt 语言环境。

该设计的重点是：

1. 各环境入口保持原有插件组合与框架规则不变。
2. 严格模式不重复维护多份相似的 TypeScript 规则清单。
3. TypeScript 严格层应尽可能抽成可复用模块，避免 `strict.js`、`react strict`、`vue strict`、`nuxt strict` 出现规则漂移。

## 严格模式规则策略

### 规则来源

严格模式优先复用 `typescript-eslint` 官方配置，减少自定义规则维护成本：

1. 优先评估 `tseslint.configs.strictTypeChecked` 是否可直接使用。
2. 保留 `tseslint.configs.stylisticTypeChecked` 作为风格补充。
3. 若当前版本导出的严格预设不可用，则回退为在 `recommendedTypeChecked` 基础上手动覆盖关键规则。

说明：当前仓库已明确使用 `typescript-eslint` v8 系列，但实现阶段仍需确认严格预设在当前版本中的导出名称和可用性。

### 规则等级原则

严格模式的规则等级应遵循以下原则：

1. 已经在默认模式中属于基础质量底线的规则，保持原有等级。
2. 新增的严格型 TypeScript 规则，原则上优先使用 `warning`。
3. 只有会明显引发运行时风险、且误报成本较低的规则，才考虑保留或提升为 `error`。

### 环境变量使用原则

环境变量只应用于少量“开发期高频出现、但不应影响日常调试效率”的规则，不应作为大面积关闭规则的开关。

建议策略如下：

1. `warning` 与 `error` 级别默认始终开启，不再因为非 production 环境而整体关闭。
2. 仅为少量高噪音规则保留按环境切换能力，例如：
   - `no-console`
   - `no-debugger`
   - `max-lines`
   - `max-lines-per-function`
3. 上述动态规则仅在 `production` 中提升为有效等级，在开发阶段允许关闭或降级。
4. 严格模式的核心 TypeScript 安全规则，例如 `no-explicit-any`、`no-unsafe-*`、`no-floating-promises`，不依赖环境变量控制。

这样可以避免以下问题：

1. 开发环境下大量规则被整体关闭，导致本地反馈与 CI 行为严重分裂。
2. 严格模式规则因为环境差异而失去稳定性。
3. 用户难以判断某个规则到底属于配置本身，还是环境开关偶然触发。

### 建议重点开启的严格规则

以下规则建议在严格模式中启用，并优先使用 `warning`：

1. `@typescript-eslint/no-explicit-any`: 禁用 `any`。
2. `@typescript-eslint/no-unsafe-assignment`: 提示不安全赋值。
3. `@typescript-eslint/no-unsafe-argument`: 提示不安全参数传递。
4. `@typescript-eslint/no-unsafe-member-access`: 提示不安全成员访问。
5. `@typescript-eslint/no-unsafe-return`: 提示不安全返回值。
6. `@typescript-eslint/no-unsafe-call`: 提示不安全调用。
7. `@typescript-eslint/no-floating-promises`: 提示未处理 Promise。
8. `@typescript-eslint/no-misused-promises`: 提示 Promise 误用。
9. `@typescript-eslint/await-thenable`: 提示无效 await。
10. `@typescript-eslint/no-unnecessary-type-assertion`: 提示不必要断言。
11. `@typescript-eslint/no-base-to-string`: 提示隐式对象转字符串。
12. `@typescript-eslint/only-throw-error`: 提示抛出非 Error 值。

其中，`@typescript-eslint/no-explicit-any` 是本次严格模式的核心要求，应明确从当前默认模式的关闭状态调整为开启状态。为兼容逐步治理，建议初始等级为 `warning`，而不是 `error`。

### 建议继续保持非阻塞的规则

以下规则即使在严格模式下也建议先保持 `warning`，避免一次性制造大量遗留整改成本：

1. `@typescript-eslint/no-unsafe-*` 系列。
2. `@typescript-eslint/no-floating-promises`。
3. `@typescript-eslint/no-misused-promises`。
4. `@typescript-eslint/no-base-to-string`。
5. `@typescript-eslint/no-unnecessary-type-assertion`。

## 文件级变更设计

### 新增文件

1. `strict.js`
2. `react-strict.js`
3. `vue-strict.js`
4. `nuxt-strict.js`
5. 内部严格层复用模块（如 `strict-type-checked.js`）

职责：

1. 作为严格模式唯一入口。
2. 继承默认配置。
3. 追加类型感知型 TypeScript 严格规则。

其中内部复用模块职责为：

1. 封装统一的类型感知语言选项。
2. 封装统一的严格规则集合。
3. 支撑多个 strict 入口复用，减少维护成本。

### 修改文件

1. `index.js`
   - 从默认入口中剥离高强度类型感知规则。
   - 保留必要的基础规则与非类型依赖规则。
   - 将环境变量动态控制收敛到少数高噪音规则。
2. `package.json`
   - 在 `files` 中加入 `strict.js`。
   - 在 `exports` 中新增 `./strict`、`./react/strict`、`./vue/strict`、`./nuxt/strict`。
   - 新增各严格模式测试脚本，例如 `test:strict`、`test:react:strict`、`test:vue:strict`、`test:nuxt:strict`。
3. `tsdown.config.ts`
   - 将各 strict 入口加入构建入口列表，确保生成对应构建产物。
4. `README.md`
   - 补充严格模式的安装与使用示例。
   - 解释默认模式与严格模式的区别。
   - 补充各环境 strict 入口的导入方式。
5. 测试目录
   - 新增专用于严格模式的测试样例文件，或新增严格模式测试命令。

### 是否需要抽取共享规则

建议优先采用“最小重构”策略：

1. 默认入口与环境入口继续维持当前文件结构，避免大规模拆分。
2. 将严格模式专属的类型感知规则与语言选项抽到独立内部模块。
3. 各 strict 入口只负责组合自身环境配置与共享严格层。

这样能先实现目标，同时避免多个 strict 入口出现规则漂移。

## 兼容性设计

### 对现有用户的影响

1. 默认入口仍然存在，导入路径不变。
2. 默认模式会比当前版本更宽松，旧项目接入阻力下降。
3. 高要求项目可显式切换到 `eslint-config-cmyr/strict`。
4. React、Vue、Nuxt 项目也可显式切换到对应 strict 子路径，而无需自行叠加规则。

### 版本策略建议

由于默认入口行为会从“类型感知且偏严格”调整为“基础规则优先”，建议将本次发布视为有行为变化的版本更新。

推荐做法：

1. 若当前维护者认为这是兼容性优化，可作为次版本发布。
2. 若担心依赖当前严格行为的用户受到影响，可按大版本发布处理。

从风险角度看，更稳妥的做法是至少在变更说明中明确指出默认入口的 TypeScript 严格度已下调。

## 测试与验证方案

### 测试目标

1. 默认入口对现有示例文件继续可用。
2. 严格入口能够正确识别 `any` 和类型不安全行为。
3. 构建产物和包导出均可正常使用。

### 建议新增验证项

1. 新增 `npm run test:strict`，例如执行：`eslint -c strict.js test/strict.test.ts`。
2. 新建 `test/strict.test.ts`，包含以下样例：
   - 显式 `any`
   - 未处理 Promise
   - 不安全成员访问
   - 不安全返回值
3. 新增 React、Vue、Nuxt 严格模式测试样例，验证各入口能对 `any` 与不安全操作给出 `warning`。
4. 保留现有 `test:ts`、`test:tsx`、`test:vue`、`test:nuxt`，验证默认入口不因严格模式拆分而失效。
5. 在非 production 环境下执行至少一组示例，验证仅少量动态规则受环境变量影响，其余规则保持稳定。
6. 运行 `npm run build`，确认各 strict 构建产物正常生成。

### 验收标准

1. `eslint-config-cmyr` 默认入口在普通 TypeScript 项目中不再强依赖高强度类型检查能力。
2. `eslint-config-cmyr/strict` 可独立启用，并对 `any` 发出告警。
3. `eslint-config-cmyr/react/strict`、`eslint-config-cmyr/vue/strict`、`eslint-config-cmyr/nuxt/strict` 可独立启用，并复用同一套严格策略。
4. 严格模式新增规则以 `warning` 为主，不产生大量新的阻塞型 `error`。
5. 环境变量仅影响少量高噪音规则，不影响严格模式核心 TypeScript 安全规则。
6. `package.json`、构建配置、README、测试脚本均已覆盖严格模式入口。

## 实施步骤建议

1. 调整 `index.js`，移除默认入口中的类型感知严格层。
2. 抽取可复用的严格 TypeScript 规则层与语言选项。
3. 新建 `strict.js`、`react strict`、`vue strict`、`nuxt strict` 入口。
4. 调整 `utils.js` 中的规则等级常量，收敛环境变量使用范围。
5. 更新 `package.json` 与 `tsdown.config.ts`，补齐发布和构建入口。
6. 增加严格模式测试样例与测试脚本。
7. 更新 `README.md` 和 `CHANGELOG.md`。
8. 执行默认模式与严格模式的 lint、构建验证。

## 风险与应对

### 风险 1：严格预设不可直接复用

风险：`typescript-eslint` 当前版本的严格预设名称或行为与预期不完全一致。

应对：

1. 实现前先确认官方导出。
2. 若无法直接复用，则基于 `recommendedTypeChecked` 手动补齐核心严格规则。

### 风险 2：默认模式放宽后，部分用户认为约束下降

风险：已有用户可能依赖当前默认入口的类型感知能力。

应对：

1. 在 README 和 CHANGELOG 中明确说明变更。
2. 提供 `strict.js` 作为显式升级路径。

### 风险 3：严格模式初次接入告警数量较多

风险：高质量规则即使使用 `warning`，也可能在存量项目里产生较多提示。

应对：

1. 首版严格模式只纳入最关键的一组规则。
2. 以 `warning` 为默认等级，允许项目逐步治理。

### 风险 4：多环境 strict 入口出现规则漂移

风险：React、Vue、Nuxt 各自复制一份严格规则后，后续维护容易出现不一致。

应对：

1. 将严格层抽成单一复用模块。
2. 各环境 strict 入口只负责组合，不直接维护完整规则清单。

### 风险 5：环境变量继续被滥用导致本地与 CI 行为不一致

风险：若仍沿用“非 production 全部关闭”的模式，会削弱配置的可预期性。

应对：

1. 将通用 `warning` / `error` 常量改为静态值。
2. 单独提供少量 `prod-only` 级别常量，只供高噪音规则使用。

## 结论

本次方案的核心是把“默认可用性”和“严格类型安全”分离：

1. `index.js` 回归兼容性优先，只保留必要规则。
2. `strict.js` 与 React、Vue、Nuxt 的 strict 入口共同承载高标准 TypeScript 规则，并以 `warning` 为主逐步收紧。
3. 环境变量只保留在少量高噪音规则上，避免开发环境与 CI 行为大面积分裂。
4. 同步补齐导出、构建、测试和文档，确保严格模式成为正式可发布能力。
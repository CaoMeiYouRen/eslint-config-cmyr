import { createConfigForNuxt, defineFlatConfigs } from '@nuxt/eslint-config'
import { defineConfig } from 'eslint/config'
import vueConfig from './vue.js'
// Nuxt.js 规则
export default defineFlatConfigs({
    // features: {
    //     stylistic: true, // 启用样式化规则
    //     typescript: true, // 启用 TypeScript 支持
    // },
}).append(vueConfig)

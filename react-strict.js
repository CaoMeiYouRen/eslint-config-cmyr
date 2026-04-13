import { defineConfig } from 'eslint/config'
import reactConfig from './react.js'
import { createStrictTypeCheckedConfig } from './strict-type-checked.js'

export default defineConfig([
    reactConfig,
    createStrictTypeCheckedConfig(),
])

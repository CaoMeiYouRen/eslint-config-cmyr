import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'
export default defineConfig([
    stylistic.configs.customize({
        indent: 4,
    }),
])

import { defineConfig } from 'vite'

export default defineConfig(env => ({
	base: env.mode === 'production' ? '/ares-cms-contember/' : '/',
}))

import type { UserConfig } from 'vite'

const config: UserConfig = {
  server: {
    host: true
  },
  preview: {
    port: 3000
  },
  base: '/open-source-forum-rules/'
}
export default config

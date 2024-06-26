import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { zh } from './zh'
import { pt } from './pt'
import { ru } from './ru'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'English', ...en },
    zh: { label: '简体中文', ...zh },
    // pt: { label: 'Português', ...pt },
    // ru: { label: 'Русский', ...ru },
    // ko: { label: '한국어', lang: 'ko-KR', link: 'https://vitepress.vuejs.kr/' }
  }
})

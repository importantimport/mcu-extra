import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: 'Additional packages to add new features and bug fixes to Material Color Utilities.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/importantimport/mcu-extra' },
    ],
  },
  title: 'MCU Extra',
})

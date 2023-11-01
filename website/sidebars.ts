import type { SidebarConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarConfig = {
  docs: [
    'introduction',
    {
      items: ['neru-camera', 'animare-shindan', 'hanerubeat', 'inaba-jinja'],
      label: 'ねるねるアプリ',
      type: 'category'
    },
    {
      items: ['shinju-date', '21g'],
      label: 'プロダクト',
      type: 'category'
    }
  ]
}

export default sidebars

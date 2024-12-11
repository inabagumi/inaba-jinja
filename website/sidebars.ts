import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    'introduction',
    {
      items: ['neru-camera', 'animare-shindan', 'hanerubeat', 'inaba-jinja'],
      label: 'ねるねるアプリ',
      type: 'category'
    },
    {
      items: ['shinju-date'],
      label: 'プロダクト',
      type: 'category'
    }
  ]
}

export default sidebars

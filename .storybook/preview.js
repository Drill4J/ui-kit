import React from 'react'
import GlobalStyles from './../src/styles/GlobalStyles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  backgrounds: {
    default: 'drill-theme',
    values: [
      {
        name: 'drill-theme',
        value: `linear-gradient(177.8deg, #F5FAFF 1.95%, #FFFFFF 98.34%)`,
      },
    ],
  },
  controls: { expanded: true },
  options: {
    storySort: (a, b) => {
      // We want the Welcome story at the top
      if (b[1].kind === 'Welcome') {
        return 1
      }

      // Sort the other stories by ID
      // https://github.com/storybookjs/storybook/issues/548#issuecomment-530305279
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true })
    },
  },
}

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]

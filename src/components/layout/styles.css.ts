import { style } from '@vanilla-extract/css'

import { sprinkles } from '#components/shared/sprinkles.css'

export const container = style([
  sprinkles({
    paddingX: {
      mobile: 'xlarge',
      tablet: 'xlarge',
    },
  }),
  {
    maxWidth: '720px',
    margin: 'auto',
  },
])

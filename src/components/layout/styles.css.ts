import { style } from '@vanilla-extract/css'

import { theme } from '#shared/theme.css'

export const layoutWrapper = style({
  maxWidth: '720px',
  margin: 'auto',
})

export const container = style({
  width: '100%',
  maxWidth: `calc(100% - ${theme.space.xxlarge})`,
  margin: 'auto',
})

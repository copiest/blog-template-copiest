import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const anchorText = style({
  color: `${theme.color.lightblue} !important`,
  textDecoration: 'underline !important',
  cursor: 'pointer',
})

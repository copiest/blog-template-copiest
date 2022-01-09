import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const paragraphText = style({
  margin: `18px 0`,
  fontSize: theme.fontSize.medium,
  lineHeight: '1.5',
})

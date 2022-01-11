import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const h3 = style({
  margin: `${theme.space.xxlarge} 0 12px`,
  fontSize: '22px',
  fontWeight: theme.fontWeight.semiBold,
})

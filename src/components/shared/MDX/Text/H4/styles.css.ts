import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const h4 = style({
  margin: `${theme.space.xlarge} 0 8px`,
  fontSize: theme.fontSize.medium,
  fontWeight: theme.fontWeight.semiBold,
})

import { style } from '@vanilla-extract/css'

import { mediaQuery } from '#components/shared/sprinkles.css'
import { theme } from '#components/shared/theme.css'

export const title = style({
  margin: `${theme.space.xxxlarge} 0 ${theme.space.xlarge}`,
  color: theme.color.darkblue,
  fontSize: theme.space.xxlarge,
  fontWeight: theme.fontWeight.bold,
})

export const container = style({
  marginBottom: '80px',
})

export const cardContainer = style({
  marginTop: '60px',
  ':first-child': {
    marginTop: 0,
  },
  '@media': {
    [mediaQuery.mobile]: {
      marginTop: '50px',
    },
  },
})

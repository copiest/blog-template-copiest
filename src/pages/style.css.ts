import { style } from '@vanilla-extract/css'

import { mediaQuery } from '#components/shared/sprinkles.css'

export const cardContainer = style({
  marginTop: '80px',
  '@media': {
    [mediaQuery.mobile]: {
      marginTop: '40px',
    },
  },
})

import { style } from '@vanilla-extract/css'

import { mediaQuery, sprinkles } from '#components/shared/sprinkles.css'
import { theme } from '#components/shared/theme.css'

export const bodyContainer = style([
  sprinkles({
    backgroundColor: {
      lightMode: 'white',
      darkMode: 'mageticdark',
    },
  }),
])

export const title = style([
  sprinkles({
    color: {
      lightMode: 'darkblue',
      darkMode: 'white',
    },
  }),
  {
    margin: `${theme.space.xxxlarge} 0 ${theme.space.xlarge}`,
    fontSize: theme.space.xxlarge,
    fontWeight: theme.fontWeight.bold,
  },
])

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

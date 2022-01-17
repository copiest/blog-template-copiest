import { style } from '@vanilla-extract/css'

import { theme } from '#shared/theme.css'
import { mediaQuery, sprinkles } from '#components/shared/sprinkles.css'

export const footer = style([
  sprinkles({
    backgroundColor: {
      lightMode: 'whiteblue',
      darkMode: 'mageticdark',
    },
    color: {
      lightMode: 'bluegreen',
      darkMode: 'lightwhite',
    },
  }),
  {
    padding: '20px',
    textAlign: 'center',
    lineHeight: '18px',
    letterSpacing: '1.6px',
    fontSize: '13px',
    fontFamily: theme.font.footer,
    '@media': {
      [mediaQuery.mobile]: {
        fontSize: theme.fontSize.tiny,
      },
    },
  },
])

export const contact = style({
  display: 'block',
})

export const mail = style({
  color: theme.color.bluegray,
  selectors: {
    '&:active, &:link, &:visited': {
      color: theme.color.bluegray,
    },
  },
})

export const copyright = style({
  display: 'block',
})

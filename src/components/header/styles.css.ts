import { style } from '@vanilla-extract/css'

import { theme } from '#shared/theme.css'
import { sprinkles } from '#components/shared/sprinkles.css'
import { Z_INDEX } from '#constants'

export const header = style([
  sprinkles({
    backgroundColor: {
      lightMode: 'white',
      darkMode: 'mageticdark',
    },
  }),
  {
    position: 'sticky',
    top: 0,
    left: 0,
    height: '60px',
    borderBottom: `1px solid ${theme.borderColor.grayOpacity}`,
    zIndex: Z_INDEX.header,
  },
])

export const navbar = style({
  width: '100%',
  maxWidth: '960px',
  height: '100%',
  margin: 'auto',
})

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  padding: '0 24px',
})

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
})

export const imageContainer = style({
  marginRight: '10px',
})

export const title = style([
  sprinkles({
    display: {
      mobile: 'none',
    },
    color: {
      lightMode: 'black',
      darkMode: 'white',
    },
  }),
  {
    fontFamily: theme.font.header,
    fontSize: theme.fontSize.large,
    letterSpacing: theme.letterSpacing.medium,
  },
])

export const menuContainer = style({
  display: 'flex',
})

export const menuTitle = style([
  sprinkles({
    color: {
      lightMode: 'black',
      darkMode: 'white',
    },
  }),
  {
    fontFamily: theme.font.header,
    letterSpacing: theme.letterSpacing.medium,
    marginRight: theme.space.large,
    ':last-child': {
      marginRight: theme.space.none,
    },
  },
])

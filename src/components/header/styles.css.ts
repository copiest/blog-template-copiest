import { style } from '@vanilla-extract/css'

import { theme } from '#shared/theme.css'
import { sprinkles } from '#components/shared/sprinkles.css'

export const navbar = style({
  position: 'sticky',
  top: 0,
  left: 0,
  height: '60px',
  backgroundColor: `${theme.color.white}`,
  borderBottom: `1px solid ${theme.borderColor.grayOpacity}`,
})

export const wrapper = style({
  width: '100%',
  maxWidth: '840px',
  height: '100%',
  margin: 'auto',
})

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: `calc(100% - ${theme.space.xxlarge})`,
  height: '100%',
  margin: 'auto',
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

export const menuTitle = style({
  fontFamily: theme.font.header,
  letterSpacing: theme.letterSpacing.medium,
  marginRight: theme.space.large,
  ':last-child': {
    marginRight: theme.space.none,
  },
})

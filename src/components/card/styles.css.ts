import { style } from '@vanilla-extract/css'

import { theme } from '#shared/theme.css'
import { oneLineEllipsis, twoLineEllipsis } from '#shared/mixin.css'
import { sprinkles } from '#components/shared/sprinkles.css'

export const container = style({
  display: 'flex',
})

export const imageContainer = style([
  sprinkles({
    display: {
      mobile: 'none',
    },
  }),
  {
    minWidth: '120px',
    height: '120px',
    marginRight: theme.space.xlarge,
  },
])

export const textContainer = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
])

export const titleText = style([
  sprinkles({
    fontSize: {
      desktop: 'xlarge',
      tablet: 'large',
      mobile: 'large',
    },
    paddingTop: {
      tablet: 'medium',
      desktop: 'none',
      mobile: 'none',
    },
    marginBottom: {
      desktop: 'medium',
      tablet: 'none',
      mobile: 'none',
    },
  }),
  {
    fontFamily: theme.font.cardTitle,
  },
  twoLineEllipsis,
])

export const descriptionText = style([
  sprinkles({
    marginTop: {
      mobile: 'medium',
    },
  }),
  { lineHeight: 'normal' },
  oneLineEllipsis,
])

export const dateText = style([
  sprinkles({
    marginBottom: {
      desktop: 'none',
      tablet: 'medium',
      mobile: 'none',
    },
  }),
  {
    display: 'block',
    marginTop: theme.space.large,
    color: theme.color.gray,
  },
])

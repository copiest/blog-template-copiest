import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'
import { sprinkles } from '#components/shared/sprinkles.css'

export const container = style([
  sprinkles({
    marginTop: {
      desktop: 'huge',
      tablet: 'xxxlarge',
      mobile: 'xlarge',
    },
  }),
])

export const title = style([
  sprinkles({
    fontSize: {
      desktop: 'xxlarge',
      tablet: 'xlarge',
      mobile: 'xlarge',
    },
    marginBottom: {
      desktop: 'xlarge',
      tablet: 'xlarge',
      mobile: 'large',
    },
  }),
  { fontWeight: theme.fontWeight.bold },
])

export const date = style([
  sprinkles({
    paddingBottom: {
      desktop: 'xxxlarge',
      tablet: 'xxlarge',
      mobile: 'xlarge',
    },
  }),
  {
    display: 'block',
    color: theme.color.gray,
    fontSize: theme.fontSize.medium,
    textAlign: 'center',
  },
])
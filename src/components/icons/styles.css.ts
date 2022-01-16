import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const container = style({
  marginRight: theme.space.medium,
  selectors: {
    '&:last-child': {
      marginRight: '0',
    },
  },
})

export const svg = style({
  fill: 'currentcolor',
  selectors: {
    '&:hover': {
      color: theme.color.skyblue,
    },
  },
})

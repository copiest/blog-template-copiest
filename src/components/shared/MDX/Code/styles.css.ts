import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const codeText = style({
  padding: theme.space.small,
  color: theme.color.pink,
  fontSize: theme.fontSize.small,
  fontWeight: theme.fontWeight.semiBold,
  borderRadius: theme.borderRadius.small,
  backgroundColor: theme.color.lightgray,
})

export const syntaxHighlighter = {
  borderRadius: theme.borderRadius.small,
}

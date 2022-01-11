import { globalStyle, style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const ul = style({
  marginBottom: '20px',
})

globalStyle(`${ul} > li`, {
  margin: `${theme.space.medium} 0`,
  position: 'relative',
  paddingInlineStart: theme.space.xlarge,
  color: theme.color.bluegray,
  fontSize: theme.fontSize.medium,
})

globalStyle(`${ul} > li:before`, {
  content: '',
  position: 'absolute',
  top: '6px',
  left: 0,
  width: '6px',
  height: '6px',
  backgroundColor: theme.color.bluegray,
  borderRadius: theme.borderRadius.circle,
})

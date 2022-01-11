import { globalStyle, style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const ol = style({
  marginBottom: '20px',
  counterReset: 'list-number',
})

globalStyle(`${ol} > li`, {
  margin: `${theme.space.medium} 0`,
  position: 'relative',
  paddingInlineStart: theme.space.xlarge,
  color: theme.color.bluegray,
  fontSize: theme.fontSize.medium,
})

globalStyle(`${ol} > li:before`, {
  counterIncrement: 'list-number',
  content: 'counter(list-number) "."',
  position: 'absolute',
  left: 0,
  fontSize: theme.fontSize.medium,
  fontWeight: theme.fontWeight.semiBold,
})

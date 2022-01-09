import { globalStyle, style } from '@vanilla-extract/css'

export const imageContainer = style({
  width: '100%',
})

export const image = style({
  objectFit: 'contain',
  width: '100% !important',
  position: 'relative !important' as 'relative',
  height: 'unset !important' as 'unset',
})

globalStyle(`${imageContainer} > span`, {
  position: 'relative !important' as 'relative',
})

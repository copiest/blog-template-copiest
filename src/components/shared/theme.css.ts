import { createGlobalTheme } from '@vanilla-extract/css'

export const theme = createGlobalTheme(':root', {
  deviceWidth: {
    desktop: '1024px',
    tablet: '768px',
    mobile: '375px',
  },
  color: {
    white: '#fff',
    black: '#000',
  },
  space: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    xlarge: '32px',
    xxlarge: '48px',
  },
  fontSize: {
    xlarge: '32px',
    large: '24px',
    medium: '18px',
    small: '15px',
    tiny: '12px',
  },
  letterSpacing: {
    large: '2px',
    medium: '1.5px',
    small: '1px',
  },
  font: {
    header: 'Bebas Neue, cursive',
  },
  borderColor: {
    grayOpacity: 'rgba(0,27,55,0.1)',
  },
})

import { createGlobalTheme } from '@vanilla-extract/css'

export const theme = createGlobalTheme(':root', {
  color: {
    white: '#fff',
    black: '#000',
    gray: '#8b95a1',
  },
  space: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    xlarge: '24px',
    xxlarge: '32px',
    xxxlarge: '48px',
  },
  fontSize: {
    tiny: '12px',
    small: '15px',
    medium: '18px',
    large: '24px',
    xlarge: '32px',
  },
  letterSpacing: {
    large: '2px',
    medium: '1.5px',
    small: '1px',
  },
  font: {
    header: 'Bebas Neue, cursive',
    cardTitle: 'Do Hyeon, sans-serif',
  },
  borderColor: {
    grayOpacity: 'rgba(0,27,55,0.1)',
  },
})

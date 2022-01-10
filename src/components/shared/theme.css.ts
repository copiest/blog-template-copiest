import { createGlobalTheme } from '@vanilla-extract/css'

export const theme = createGlobalTheme(':root', {
  color: {
    white: '#fff',
    black: '#000',
    lightgray: '#f3f4f6',
    darkgray: '#636e72',
    bluegray: '#4e5968',
    gray: '#8b95a1',
    pink: '#c586c0',
    lightblue: '#54a0ff',
    darkblue: '#434c58',
  },
  space: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    xlarge: '24px',
    xxlarge: '32px',
    xxxlarge: '48px',
    huge: '96px',
  },
  fontSize: {
    tiny: '12px',
    small: '14px',
    xsmall: '16px',
    medium: '18px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '48px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  letterSpacing: {
    large: '2px',
    medium: '1.5px',
    small: '1px',
  },
  borderRadius: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    circle: '50%',
  },
  font: {
    header: 'Bebas Neue, cursive',
    cardTitle: 'Do Hyeon, sans-serif',
  },
  borderColor: {
    grayOpacity: 'rgba(0,27,55,0.1)',
  },
})

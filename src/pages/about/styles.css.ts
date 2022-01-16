import { globalStyle, style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'
import { mediaQuery, sprinkles } from '#components/shared/sprinkles.css'

export const container = style([
  sprinkles({
    marginY: {
      desktop: 'xgreat',
      tablet: 'xgreat',
      mobile: 'xxxlarge',
    },
  }),
])

export const articleContainer = style({
  marginBottom: theme.space.xgreat,
})

export const title = style([
  sprinkles({
    fontSize: {
      desktop: 'xxlarge',
      tablet: 'xlarge',
      mobile: 'xlarge',
    },
    marginBottom: {
      desktop: 'xxxlarge',
      tablet: 'xxxlarge',
      mobile: 'xxlarge',
    },
  }),
  {
    color: theme.color.darkblue,
    fontWeight: theme.fontWeight.bold,
    lineHeight: '1.2',
    whiteSpace: 'pre-line',
  },
])

export const description = style([
  sprinkles({
    fontSize: {
      desktop: 'large',
      tablet: 'large',
      mobile: 'medium',
    },
  }),
  {
    marginBottom: theme.space.large,
    lineHeight: '1.3',
    whiteSpace: 'pre-line',
  },
])

export const subtitle = style([
  sprinkles({
    fontSize: {
      desktop: 'xlarge',
      tablet: 'xlarge',
      mobile: 'large',
    },
    marginBottom: {
      desktop: 'xxlarge',
      tablet: 'xxlarge',
      mobile: 'xlarge',
    },
  }),
  {
    color: theme.color.darkblue,
    fontWeight: theme.fontWeight.bold,
  },
])

export const experienceContainer = style([
  sprinkles({
    flexDirection: {
      desktop: 'row',
      tablet: 'column',
      mobile: 'column',
    },
    justifyContent: {
      desktop: 'space-between',
      tablet: 'flex-start',
      mobile: 'flex-start',
    },
  }),
  {
    display: 'flex',
  },
])

export const companyContainer = style([
  sprinkles({
    marginBottom: {
      desktop: 'none',
      tablet: 'xxlarge',
      mobile: 'xxlarge',
    },
  }),
])

export const companyTitle = style({
  marginBottom: theme.space.medium,
  fontSize: theme.fontSize.large,
})

export const companySubtitle = style({
  display: 'block',
  marginBottom: theme.space.small,
  fontSize: theme.fontSize.medium,
})

export const companyDescription = style({
  '@media': {
    [mediaQuery.mobile]: {
      selectors: {
        '&:last-of-type': {
          paddingLeft: theme.space.large,
          borderLeft: `${theme.space.small} solid ${theme.color.skyblue}`,
        },
      },
    },
    [mediaQuery.tablet]: {
      selectors: {
        '&:last-of-type': {
          paddingLeft: theme.space.large,
        },
      },
    },
  },
})

globalStyle(`${container} > *`, {
  color: theme.color.bluegray,
})

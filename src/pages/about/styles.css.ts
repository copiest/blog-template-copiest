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
    marginBottom: {
      desktop: 'great',
      tablet: 'great',
      mobile: 'great',
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
      tablet: 'xlarge',
      mobile: 'xlarge',
    },
  }),
  {
    flex: '3',
  },
])

export const companyTitle = style({
  marginBottom: theme.space.medium,
  fontSize: theme.fontSize.large,
  fontWeight: theme.fontWeight.semiBold,
})

export const companySubtitle = style({
  display: 'block',
  marginBottom: theme.space.small,
  fontSize: theme.fontSize.medium,
})

export const companyDescriptionContainer = style({
  '@media': {
    [mediaQuery.mobile]: {
      selectors: {
        '&:last-of-type': {
          paddingLeft: theme.space.large,
          borderLeft: `${theme.space.small} solid ${theme.color.skyblue}`,
        },
      },
    },
    'screen and (max-width: 768px)': {
      selectors: {
        '&:last-of-type': {
          paddingLeft: theme.space.large,
          borderLeft: `${theme.space.small} solid ${theme.color.skyblue}`,
        },
      },
    },
  },
  flex: '7',
})

export const companyDescription = style({
  marginBottom: theme.space.xlarge,
  selectors: {
    '&:last-child': {
      marginBottom: theme.space.none,
    },
  },
})

export const projectTitle = style({
  margin: `${theme.space.medium} 0`,
  fontSize: theme.fontSize.large,
  fontWeight: theme.fontWeight.semiBold,
})

export const proejctSubtitle = style({
  display: 'block',
  marginBottom: theme.space.large,
  fontSize: theme.fontSize.medium,
})

export const projectDescription = style({
  display: 'block',
  marginBottom: theme.space.xlarge,
  fontSize: theme.fontSize.medium,
})

export const proejctItems = style({
  marginBottom: '20px',
})

export const projectStacks = style({
  display: 'flex',
  flexWrap: 'wrap',
})

export const projectStack = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: `0 ${theme.space.medium} ${theme.space.medium} 0`,
  padding: theme.space.medium,
  color: theme.color.bluegray,
  fontSize: theme.fontSize.small,
  backgroundColor: '#f0f4f6',
  borderRadius: theme.borderRadius.medium,
})

globalStyle(`${container} > *`, {
  color: theme.color.bluegray,
})

globalStyle(`${proejctItems} > li`, {
  margin: `${theme.space.medium} 0`,
  position: 'relative',
  paddingInlineStart: theme.space.large,
  color: theme.color.bluegray,
  fontSize: theme.fontSize.medium,
})

globalStyle(`${proejctItems} > li:before`, {
  content: '',
  position: 'absolute',
  top: '6px',
  left: 0,
  width: '5px',
  height: '5px',
  backgroundColor: theme.color.skyblue,
  borderRadius: theme.borderRadius.circle,
})

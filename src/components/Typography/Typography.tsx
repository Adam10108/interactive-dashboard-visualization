import { useTheme } from '@emotion/react'
import { CSSProperties, PropsWithChildren } from 'react'

type VariantType = 'body' | 'small' | 'caption' | 'heading' | 'h2' | 'subTitle'

export interface TypographyProps {
  variant?: VariantType
  style?: CSSProperties
}

export const Typography = (props: PropsWithChildren<TypographyProps>) => {
  const { variant = 'h2', style } = props

  const theme = useTheme()

  const baseStyle = {
    fontSize: theme.fontSizes.sm,
    fontStyle: 'normal',
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.text.dark,
    lineHeight: '23px',
  }

  const styleMapping: Record<VariantType, CSSProperties> = {
    body: {
      ...baseStyle,
      fontWeight: theme.fontWeights.medium,
    },
    small: {
      ...baseStyle,
      color: theme.colors.text.small,
    },
    caption: {
      ...baseStyle,
      color: theme.colors.text.light,
    },
    heading: {
      ...baseStyle,
      fontSize: theme.fontSizes['xl'],
      fontWeight: theme.fontWeights.semibold,
    },
    h2: {
      ...baseStyle,
      fontSize: theme.fontSizes['3xl'],
      fontWeight: theme.fontWeights.semibold,
      lineHeight: '38px',
    },
    subTitle: {
      ...baseStyle,
      color: theme.colors.text.muted,
    },
  }

  return (
    <div
      style={{
        ...styleMapping[variant],
        ...style,
      }}
    >
      {props.children}
    </div>
  )
}

import { useTheme } from '@emotion/react'
import { CSSProperties, PropsWithChildren } from 'react'

type PaddingMapping = keyof typeof paddingMapping

export interface CardProps {
  padding?: PaddingMapping
  borderRadius?: PaddingMapping
  style?: CSSProperties
}

export const Card = (props: PropsWithChildren<CardProps>) => {
  const { padding = 'l', borderRadius = 'l', style } = props

  const theme = useTheme()

  return (
    <div
      style={{
        borderRadius: theme.borderRadius[borderRadius],
        border: `1px solid ${theme.colors.border.light}`,
        background: theme.colors.white,
        padding: paddingMapping[padding],
        ...style,
      }}
    >
      {props.children}
    </div>
  )
}

const paddingMapping = {
  s: 8,
  m: 16,
  l: 24,
  xl: 30,
}

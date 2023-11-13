import { useTheme } from '@emotion/react'
import { CSSProperties, PropsWithChildren } from 'react'

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  height?: CSSProperties['height']
  width?: CSSProperties['width']
  style?: CSSProperties
}

export const Divider = (props: PropsWithChildren<DividerProps>) => {
  const { orientation = 'horizontal', style } = props

  const theme = useTheme()

  return (
    <div
      style={{
        writingMode:
          orientation === 'horizontal' ? 'horizontal-tb' : 'vertical-lr',
        borderBlockStart: `1px solid ${theme.colors.divider}`,
        borderWidth: 1,
        ...style,
      }}
    />
  )
}

import { CSSProperties, PropsWithChildren } from 'react'

import { availableIcons } from '@/assets/Icons'

type IconName = keyof typeof availableIcons

export interface IconProps {
  name: IconName
  style?: CSSProperties
}

export const Icon = (props: PropsWithChildren<IconProps>) => {
  const { style, name } = props
  return <img style={style} src={availableIcons[name]} alt={`icon-${name}`} />
}

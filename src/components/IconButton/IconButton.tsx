import { useTheme } from '@emotion/react'
import { CSSProperties, DragEvent } from 'react'

import { Icon, IconProps } from '@/components'

export interface IconButtonProps {
  iconName: IconProps['name']
  active?: boolean
  disabled?: boolean
  draggable?: HTMLButtonElement['draggable']
  onDragStart?: (e: DragEvent<HTMLButtonElement>) => void
  onClick?: () => void
  style?: CSSProperties
}

export const IconButton = (props: IconButtonProps) => {
  const {
    iconName,
    active = false,
    disabled = false,
    draggable = false,
    onDragStart = () => null,
    onClick = () => null,
    style,
  } = props

  const theme = useTheme()

  const styleMapping = {
    active: {
      border: '1px solid #E1E8FF',
      backgroundColor: '#E1E8FF',
    },
    disabled: {
      cursor: 'not-allowed',
    },
  }

  return (
    <button
      disabled={disabled}
      draggable={draggable}
      onDragStart={onDragStart}
      onClick={onClick}
      style={{
        padding: 10,
        borderStyle: 'none',
        borderRadius: theme.borderRadius['s'],
        border: '1px solid #EDF2F7',
        backgroundColor: '#F7FAFC',
        ...(active && styleMapping['active']),
        ...(disabled && styleMapping['disabled']),
        ...style,
      }}
    >
      <Icon name={iconName} />
    </button>
  )
}

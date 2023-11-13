/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

import { Card, Divider, IconButton, IconProps } from '@/components'

export const DroppableBar = () => {
  const [disabledDroppable, setDisabledDroppable] = useState(true)
  const [droppableItems, _setDroppableItems] = useState({
    1: { icon: 'droppable1', active: false },
    2: { icon: 'droppable2', active: false },
    3: { icon: 'droppable3', active: false },
    4: { icon: 'droppable4', active: false },
    5: { icon: 'droppable5', active: false },
    6: { icon: 'droppable6', active: false },
    7: { icon: 'droppable7', active: false },
  })

  return (
    <Card padding="s" borderRadius="m" style={{ display: 'inline-block' }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <IconButton
          iconName="hand"
          active={disabledDroppable}
          onClick={() => setDisabledDroppable(!disabledDroppable)}
        />

        <Divider orientation="vertical" />

        {Object.keys(droppableItems).map((_key, idx) => {
          const number = idx + 1

          return (
            <IconButton
              key={`button-${number}`}
              iconName={`droppable${number}` as IconProps['name']}
              disabled={disabledDroppable}
              draggable={!disabledDroppable}
              onDragStart={
                disabledDroppable
                  ? () => null
                  : (e) => e.dataTransfer.setData('text/plain', '')
              }
              style={disabledDroppable ? {} : { cursor: 'grabbing' }}
            />
          )
        })}
      </div>
    </Card>
  )
}

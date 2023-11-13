/* eslint-disable @typescript-eslint/no-explicit-any */
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import { useReducer } from 'react'
import GridLayout, { Layout } from 'react-grid-layout'

import { Card, Typography } from '@/components'

export const DroppableArea = () => {
  const [layout, dispatch] = useReducer(droppableReducer, [])

  return (
    <div
      style={{
        paddingTop: '24px',
        height: '100%',
      }}
    >
      <GridLayout
        layout={layout}
        onLayoutChange={(layout) => dispatch({ type: 'layoutChange', layout })}
        onDrop={(layout: Layout[], item: any) =>
          dispatch({ type: 'addItem', layout, item })
        }
        isDroppable={true}
        isResizable={false}
        isBounded={true}
        allowOverlap={false}
        cols={12}
        rowHeight={40}
        width={800}
      >
        {layout.map((item: Layout) => (
          <Card key={item.i}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography>Card: {item.i}</Typography>

              <span onClick={() => dispatch({ type: 'removeItem', i: item.i })}>
                X
              </span>
            </div>
          </Card>
        ))}
      </GridLayout>
    </div>
  )
}

const droppableReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'addItem':
      return [
        ...state,
        {
          x: action.item?.x ?? 1,
          y: action.item?.y ?? 1,
          h: 3,
          w: 3,
          content: action.content
            ? action.content
            : String.fromCharCode(65 + state.length),
          mouseEvent: action.mouseEvent,
          i: '' + state.length,
        },
      ]
    case 'layoutChange':
      return state
    case 'removeItem':
      if (confirm(`Delete content ${action.i}`) === true) {
        return state.filter((layoutItem: Layout) => layoutItem.i !== action.i)
      } else {
        return state
      }

    default:
      return state
  }
}

import { DroppableArea, DroppableBar } from '@/components'

export const DroppableContainer = () => {
  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <DroppableBar />

      <DroppableArea />
    </div>
  )
}

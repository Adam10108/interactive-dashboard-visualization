import {
  DroppableContainer,
  PageLayout,
  PageTitleCard,
  Typography,
} from '@/components'

import { TimeDurationCard } from '../TimeDurationCard'

export const Dashboard = () => {
  return (
    <PageLayout>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: 24,
        }}
      >
        <PageTitleCard />
        <TimeDurationCard
          items={[
            { icon: 'time', label: 'Start date', time: '15 May 2023' },
            { icon: 'flag', label: 'End date', time: '31 May 2023' },
            { icon: 'calendar', label: 'Running for', time: '7 days' },
          ]}
        />
      </div>
      <Typography
        variant="heading"
        style={{
          marginTop: 40,
          marginBottom: 24,
        }}
      >
        Dashboard
      </Typography>

      <DroppableContainer />
    </PageLayout>
  )
}

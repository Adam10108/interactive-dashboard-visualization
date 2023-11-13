import { Card, Icon, Typography } from '@/components'

export const PageTitleCard = () => {
  return (
    <Card>
      <Typography variant="small">Overview</Typography>

      <div
        style={{
          marginTop: 8,
          marginBottom: 16,
          display: 'flex',
          gap: 8,
        }}
      >
        <Typography>EXAMPLE DASHBOARD</Typography>
        <Icon name="chevron" />
      </div>

      <Typography variant="caption">Your all-in-one solution ... 🤘</Typography>
      <Typography variant="caption">
        designed to revolutionize the way you cultivate and grow your online
        community. With a powerful blend of innovative features, Content
        Transformation empowers you to thrive in the digital realm.
      </Typography>
    </Card>
  )
}

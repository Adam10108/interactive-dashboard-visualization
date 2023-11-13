import { Card, Divider, Icon, IconProps, Typography } from '@/components'

type Item = {
  icon: IconProps['name']
  label: string
  time: string
}

export interface TimeDurationCardProps {
  items: Item[]
}

export const TimeDurationCard = (props: TimeDurationCardProps) => {
  const { items } = props

  return (
    <Card>
      {items &&
        items.map((item, idx) => {
          const displayDivider = items.length > 0 && idx !== items.length - 1

          return (
            <div key={idx}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: 32,
                      height: 32,
                      borderRadius: '100px',
                      background: '#E4ECF7',
                    }}
                  >
                    <Icon
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                      name={item.icon}
                    />
                  </div>
                  <Typography variant="body">{item.label}</Typography>
                </div>
                <Typography variant="subTitle">{item.time}</Typography>
              </div>

              {displayDivider && (
                <Divider
                  style={{
                    margin: '16px  0',
                  }}
                />
              )}
            </div>
          )
        })}
    </Card>
  )
}

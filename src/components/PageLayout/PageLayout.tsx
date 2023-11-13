import { PropsWithChildren } from 'react'

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <div
      style={{
        margin: '0 auto',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          margin: 'auto',
          height: '100%',
          maxWidth: 1280,
          padding: '38px 47px',
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

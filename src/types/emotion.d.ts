import '@emotion/react'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export interface Theme extends Record<string, any> {}
}

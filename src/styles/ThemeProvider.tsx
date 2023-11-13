import './style.css'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { PropsWithChildren } from 'react'

import themeVariables from './themeVariables.json'

export const ThemeProvider = (props: PropsWithChildren) => {
  return (
    <EmotionThemeProvider theme={themeVariables}>
      {props.children}
    </EmotionThemeProvider>
  )
}

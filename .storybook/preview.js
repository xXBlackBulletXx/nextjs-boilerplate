import React from 'react'
import theme from 'theme'
import ModalContainer from 'design-system/contexts/ModalContainer'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/nunito'
import { Container } from '@mui/material'

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <ModalContainer.Provider>
            <Story />
          </ModalContainer.Provider>
        </Container>
      </ThemeProvider>
    )
  },
]

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
}

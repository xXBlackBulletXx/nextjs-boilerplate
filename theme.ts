import { purple } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { darken, lighten } from '@mui/system'

export const borderWidth = 3

let theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

theme = createTheme(theme, {
  palette: {
    primary: {
      main: purple.A700,
      light: lighten(purple.A700, 0.2),
      dark: darken(purple.A700, 0.2),
      contrastText: '#fff',
    },
  },
})

theme = createTheme(theme, {
  shape: {
    borderRadius: 4,
  },
})

theme = createTheme(theme, {
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: theme.shape.borderRadius,
          fontWeight: 900,
        },
      },
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
  },
})

export default responsiveFontSizes(theme)

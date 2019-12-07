import deepOrange from '@material-ui/core/colors/deepOrange'
import orange from '@material-ui/core/colors/orange'
import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: orange,
    type: 'light'
  },
  typography: {
    body1: {
      lineHeight: 2
    },
    body2: {
      lineHeight: 2
    },
    fontFamily: [
      'Roboto',
      'Helvetica',
      'Arial',
      'Noto Sans JP',
      'sans-serif'
    ].join(',')
  }
})

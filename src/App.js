import React from "react";
import { Button, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { orange, red, yellow } from "@material-ui/core/colors";

function App() {
const theme = createMuiTheme({
 palette: {
  primary: {
    main: '#f44336'
  }
 }
})
    
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">Hello World</Button>
    </ThemeProvider>
  );
}

export default App;
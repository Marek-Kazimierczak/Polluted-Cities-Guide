import React from "react";
import styled from "styled-components";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core";
import GlobalStyle from "../theme/GlobalStyle";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const Root = styled.div`
  max-width: 1200px;
  width: 1200px;
  min-height: 90vh;
  margin: 0 auto;
  background: #272c33;
  color: white;
`;

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <Root></Root>
    </MuiThemeProvider>
  );
};

export default App;

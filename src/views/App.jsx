import React from "react";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { globalTheme } from "../theme/Theme";
import GlobalStyle from "../theme/GlobalStyle";
import { JssProvider } from "react-jss";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point")
});

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#383f48"
      }
    }
  }
});

const App = () => {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={globalTheme}>
          <GlobalStyle />
          <Header />
          <Main />
        </ThemeProvider>
      </MuiThemeProvider>
    </JssProvider>
  );
};

export default App;

import React from "react";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { globalTheme } from "../theme/Theme";
import GlobalStyle from "../theme/GlobalStyle";
import Select from "../components/Common/Select";
import { JssProvider } from "react-jss";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import MainContainer from "../components/Layout/MainContainer";
import Accordion from "../components/Common/Accordion";

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
    MuiCardContent: {
      root: {
        backgroundColor: "#272c33"
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: "#272c33"
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
          <MainContainer>
            <Select />
            <Accordion />
          </MainContainer>
        </ThemeProvider>
      </MuiThemeProvider>
    </JssProvider>
  );
};

export default App;

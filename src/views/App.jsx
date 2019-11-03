import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Footer from "../components/Layout/Footer";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </MuiThemeProvider>
  );
};

export default App;

import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Footer from "../components/Layout/Footer";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </MuiThemeProvider>
  );
};

export default App;

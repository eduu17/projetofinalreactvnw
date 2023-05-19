import React, { Component } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/Tour list";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <TourList></TourList>
      </>
    );
  }
}

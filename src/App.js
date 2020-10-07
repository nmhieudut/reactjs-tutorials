import React, { Component } from "react";
import CounterHook from "./components/CounterHook";
import "./App.css";
import Layouts from "./components/Layouts";
export default class App extends Component {
  render() {
    // const list = [
    //   { name: "tanle", tuoi: "lon" },
    //   { name: "kien", tuoi: "khi" },
    // ];
    return (
      <div className="App">
        {/* <Items data={list} /> */}
        <CounterHook />
        {/* <Layouts /> */}
      </div>
    );
  }
}

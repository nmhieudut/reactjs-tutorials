import React, { Component } from "react";
// import Items from "./components/Items";
// import Counter from './components/Counter'
import './App.css'
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
        {/* <Counter/> */}
        <Layouts />
      </div>
    );
  }
}

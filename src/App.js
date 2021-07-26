import React, { Component } from "react";
import "./App.css";
import StudentComponent from "./component/StudentComponent";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentComponent />
      </div>
    );
  }
}

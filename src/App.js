import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentComponent from "./component/StudentComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentComponent />
      </div>
    );
  }
}
export default App;

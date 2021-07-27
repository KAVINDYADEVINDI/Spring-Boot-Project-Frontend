import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import StudentComponent from "./component/StudentComponent";
import { Navbar, Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import EditStudent from './component/EditStudent';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/" className="ml-1">
              <FontAwesomeIcon icon={faUser} className="mr-5" />
                " " Students AZ Campus " "
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div className="container">
          <StudentComponent />
        </div>
        <Switch>
          <Route exact path="student/edit/:id" component={EditStudent}></Route>
        </Switch>
      </div>
    );
  }
}
export default App;

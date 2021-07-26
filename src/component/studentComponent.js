import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Button, ButtonGroup } from "react-bootstrap";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class StudentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/students").then((response) => {
      this.setState({ students: response.data });
      console.log(response.data);
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center"> Student Management System</h1>

        <table className="table table-striped">
          <thead>
            <tr>
              <td>Student ID</td>
              <td>Student Name</td>
              <td>Course</td>
              <td>Course fee(Rs.)</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.fee}</td>

                <td>
                  <ButtonGroup>
                    <Button size="sm" variant="outline-primary">
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button size="sm" variant="outline-danger">
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

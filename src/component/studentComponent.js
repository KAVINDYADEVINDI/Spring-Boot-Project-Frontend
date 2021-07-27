import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "../student.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CreateComponent from './CreateComponent'

export default class StudentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
   
  }
  async componentDidMount() {
    await axios.get("http://localhost:8080/api/students").then((response) => {
      this.setState({ students: response.data });
      console.log(response.data);
    });
  }
 

  //when click delete button
  onDelete = (id) => {
    //send url to user_route.js
    axios.delete("http://localhost:8080/api/students/delete/" + id);
  };

 

  render() {
    
    return (
      <div>
        <h1 className="text-center "> Student Management System</h1>

        <table className="table table-striped tabl">
          <thead className="thead-dark head">
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
                    <Link
                      to={"student/edit/" + student.id}
                      className="btn btn-primary"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>

                    <Button
                      onClick={() => this.onDelete(student.id)}
                      size="sm"
                      variant="outline-danger"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <CreateComponent />
      </div>
    );
  }
}

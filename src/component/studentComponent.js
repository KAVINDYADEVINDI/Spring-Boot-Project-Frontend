import React from "react";
import studentService from "../services/studentService";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default class StudentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount(){
      axios.get("http://localhost:8080/api/students").then((response) => {
        // this.setState({students:response.data})
        console.log(response.data);
      });
  }
  // componentDidMount() {
  //   const students = studentService.getStudents();
  //   console.log(students);
    
  // }

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

import React from 'react';
import studentService from '../services/studentService';

class studentComponent extends React.Component{
    constructor(){
        this.state={
            students:[]
        }
    }

    componentDidMount(){
        studentService.getStudents().then((response)=>{
            this.setState({students:response.data})
        });
    }

    render(){
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
export default studentComponent;
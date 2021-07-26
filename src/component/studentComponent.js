import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "../student.css";
import {
  Button,
  ButtonGroup,
  Navbar,
  Container,
  Modal,
  InputGroup,
  Form,
} from "react-bootstrap";
import {
  faEdit,
  faTrash,
  faUser,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class StudentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      show: false,
    };
  }

  handleModal() {
    this.setState({ show: true });
  }
  cutModal() {
    this.setState({ show: false });
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/students").then((response) => {
      this.setState({ students: response.data });
      console.log(response.data);
    });
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <FontAwesomeIcon icon={faUser} />
              React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div className="container">
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
          <Button
            onClick={() => this.handleModal()}
            size="sm"
            variant="outline-primary"
            className="add"
          >
            <FontAwesomeIcon icon={faSave} /> Add Student
          </Button>
        </div>
        <Modal
          show={show}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <Modal.Title id="example-custom-modal-styling-title">
              Question 1
            </Modal.Title>
            <AiOutlineClose className="cut" onClick={() => this.cutModal()} />
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <Form.Control
                className="p-4 input-color-popup"
                type="text"
                name="Quiz Header"
                placeholder="Write the Question 1"
                id="Quiz Header"
              />
            </InputGroup>
            <h4 className="text-popup mb-3 text-lg-left text-md-left">
              Select Correct Answer
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className="background-primary"
            >
              ADD
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "../student.css";
import { Button, Modal, InputGroup, Form } from "react-bootstrap";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class CreateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      show: false,
      id: "",
      name: "",
      course: "",
      fee: "",
    };
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onChangeFee = this.onChangeFee.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeId(e) {
    this.setState({
      id: e.target.value,
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeCourse(e) {
    this.setState({
      course: e.target.value,
    });
  }
  onChangeFee(e) {
    this.setState({
      fee: e.target.value,
    });
  }
  //when clicking add button 
  onSubmit(e) {
    e.preventDefault();
    console.log(
      `the values are ${this.state.id},${this.state.name},${this.state.course}`
    );
    const obj = {
      id: this.state.id,
      name: this.state.name,
      course: this.state.course,
      fee: this.state.fee,
    };

    axios.post("http://localhost:8080/api/students/add", obj);

    this.setState({
      id: "",
      name: "",
      course: "",
      fee: "",
    });
    this.setState({ show: false });
     window.location.reload(false);
   
  }
  //modal popup
  handleModal() {
    this.setState({ show: true });
  }
  cutModal() {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <Button
          onClick={() => this.handleModal()}
          size="sm"
          variant="outline-primary"
          className="add"
        >
          <FontAwesomeIcon icon={faSave} /> Add Student
        </Button>

        <Modal
          show={show}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <Modal.Title id="example-custom-modal-styling-title">
              ADD STUDENT
            </Modal.Title>
            <AiOutlineClose className="cut" onClick={() => this.cutModal()} />
          </Modal.Header>
          <Form id="FormId">
            <Modal.Body>
              <InputGroup className="mb-3">
                <Form.Control
                  required
                  className="input-color-popup"
                  type="text"
                  name="id"
                  placeholder="Student Id"
                  value={this.state.id}
                  onChange={this.onChangeId}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  required
                  className="input-color-popup"
                  type="text"
                  name="name"
                  placeholder="Student Name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  required
                  className="input-color-popup"
                  type="text"
                  name="course"
                  placeholder="Course"
                  value={this.state.course}
                  onChange={this.onChangeCourse}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  required
                  className="input-color-popup"
                  type="text"
                  name="fee"
                  placeholder="Course fee (Rs.)"
                  value={this.state.fee}
                  onChange={this.onChangeFee}
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button
                size="sm"
                onClick={this.onSubmit}
                variant="outline-primary"
                color="primary"
              >
                ADD
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}
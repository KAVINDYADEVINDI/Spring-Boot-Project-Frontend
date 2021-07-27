import React,{Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "../student.css";
import { Button, Modal, InputGroup, Form } from "react-bootstrap";

import { AiOutlineClose } from "react-icons/ai";

export default class EditStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      show: true,
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

  //get data from database
  async componentDidMount() {
    //send user route.js with id
    await axios
      .get("http://localhost:8080/api/student/" + this.props.match.params.id)
      // console.log(this.props.match.params.id)
      .then((response) => {
        this.setState({
          //set data in the response
          id: response.data.id,
          name: response.data.name,
          course: response.data.course,
          fee: response.data.fee,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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

    axios.put(
      "http://localhost:8080/api/student/update/" + this.props.match.params.id,
      obj
    );

    this.setState({
      id: "",
      name: "",
      course: "",
      fee: "",
    });
    this.setState({ show: false });
    window.location.href='/';
  }

  handleModal() {
    this.setState({ show: true });
  }
  cutModal() {
    this.setState({ show: false });
    window.location.href = "/";
  }

  render() {
    const { show } = this.state;
    return (
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
            <h6>Student ID</h6>
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
            <h6>Student Full Name</h6>
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
            <h6>Course</h6>
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
            <h6>Course fee</h6>
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
              UPDATE
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

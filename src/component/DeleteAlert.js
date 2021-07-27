import React from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import { Button } from "react-bootstrap"; // Import css
import axios from "axios";

export default class DeleteAlert extends React.Component {
  submit = () => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios.delete(
              "http://localhost:8080/api/students/delete/" +
                this.props.match.params.id
            );
            window.location.href = "/";
          },
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };
  
  render() {
    return (
      <div className="container">
        <Button size="sm" variant="outline-danger" onClick={this.submit}>
          Please Click me for Confirm Delete
        </Button>
      </div>
    );
  }
}

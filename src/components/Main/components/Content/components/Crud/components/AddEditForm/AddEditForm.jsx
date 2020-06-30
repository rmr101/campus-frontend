import React from "react";
import axios from "axios";
import styles from "./AddEditForm.module.scss";

class AddEditForm extends React.Component {
  state = {
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitFormAdd = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users/students", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
        }),
      })
      .then((response) => response.json())
      .then((item) => {
        if (Array.isArray(item)) {
          this.props.addItemToState(item[0]);
          this.props.toggle();
        } else {
          console.log("failure");
        }
      })
      .catch((err) => console.log(err));
  };

  submitFormEdit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/students/${this.state.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
        }),
      })
      .then((response) => response.json())
      .then((item) => {
        if (Array.isArray(item)) {
          console.log(item[0]);
          this.props.updateState(item[0]);
          this.props.toggle();
        } else {
          console.log("failure");
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { id, firstName, lastName } = this.props.item;
      this.setState({ id, firstName, lastName });
    }
  }

  render() {
    return (
      <form
        className={styles.form}
        onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}
      >
        <h3 className={styles.title}>Create</h3>
        <div className={styles.control}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            maxLength={30}
            onChange={this.onChange}
            value={this.state.email === null ? "" : this.state.email}
            required
          />
          <label>First Name:</label>
          <input
            type="text"
            placeholder="Enter First Name"
            maxLength={30}
            onChange={this.onChange}
            value={this.state.firstName === null ? "" : this.state.firstName}
            required
          />
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            maxLength={30}
            oonChange={this.onChange}
            value={this.state.lastName === null ? "" : this.state.lastName}
            required
          />
        </div>

        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default AddEditForm;

import React from "react";
import styles from "./form.module.scss";
import studentService from "../../../../../../apis/studentService";

// Post object would need a name

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      submitted: false,
    };
    this.onEmailTyping = this.onEmailTyping.bind(this);
    this.onFirstNameTyping = this.onFirstNameTyping.bind(this);
    this.onLastNameTyping = this.onLastNameTyping.bind(this);
    this.save = this.save.bind(this);
  }

  save() {
    var data = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };

    studentService
      .create(data)
      .then((response) => {
        this.setState({
          email: response.data.email,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onEmailTyping(event) {
    console.log(event.target.email);
    this.setState({
      email: event.target.value,
    });
  }
  onFirstNameTyping(event) {
    console.log(event.target.firstName);
    this.setState({
      firstName: event.target.value,
    });
  }
  onLastNameTyping(event) {
    console.log(event.target.lastName);
    this.setState({
      lastName: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.state.submitted ?(<div>
        <h3 className={styles.title}>Student has been created Successfully!</h3>
        </div>):(
      <form className={styles.form}>
        <h3 className={styles.title}>Create</h3>
        <div className={styles.control}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            maxLength={30}
            onChange={this.onEmailTyping}
            required
          />
          <label>First Name:</label>
          <input
            type="text"
            placeholder="Enter First Name"
            maxLength={30}
            onChange={this.onFirstNameTyping}
            required
          />
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            maxLength={30}
            onChange={this.onLastNameTyping}
            required
          />
        </div>
        <button
          onClick={this.save}
          className={styles.button}
          type="submit"
        >
          Submit
        </button>
      </form>
      )}
      </div>
    );
  }
}

export default Create;

import React from "react";
import styles from "./form.module.scss";

// Post object would need a name

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.onTyping = this.onTyping.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onClick(event);

    // this is to resemble sending JSON to the server
    console.log(this.state.value);
  }

  onTyping(event) {
    console.log(event.target.value);
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.onSubmit}>
        <h3 className={styles.title}>Update</h3>
        <div className={styles.control}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            maxLength={30}
            onChange={this.onTyping}
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

export default Update;

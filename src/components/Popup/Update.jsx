import React from "react";
import styles from "./form.module.scss";
import studentService from "./../../apis/studentService";
// Post object would need a name

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      name:"",
    };
    this.onTyping = this.onTyping.bind(this);
    this.save = this.save.bind(this);
  }

  save() {
    var data={name: this.state.name};

    studentService.update(
      this.state.id,
      data
    )
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  onTyping(event) {
    if(event.target.id ==="id") {
      console.log(event.target.value);
      this.setState({
        id: event.target.value,
      });
      console.log(this.state.id);
    }else if(event.target.id ==="name"){
      console.log(event.target.value);
      this.setState({
        name: event.target.value,
      });
    }
  }

  render() {
    return (
      <form className={styles.form}>
        <h3 className={styles.title}>Update</h3>
        <div className={styles.control}>
          <label>The ID you want to update:</label>
          <input
            id="id"
            type="text"
            placeholder="Enter ID"
            onChange={this.onTyping}
            required
          />
        </div>
        <div className={styles.control}>
          <label>Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            maxLength={30}
            onChange={this.onTyping}
            required
          />
        </div>
        <button className={styles.button} onClick={this.save} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Update;

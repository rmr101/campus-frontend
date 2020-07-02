import React from "react";
import styles from "./form.module.scss";
import studentService from "./../../apis/studentService";
// Post object would need a name

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
    this.onTyping = this.onTyping.bind(this);
    this.delete = this.delete.bind(this);
  }

  //目前是，如果拿不回来你们的窗口不会关。所以要强行关掉
 
  delete() {    
    studentService.delete(this.state.id)
      .then(response => {
        console.log(response.data);
        // this.props.history.push('/tutorials')
      })
      .catch(e => {
        console.log(e);
      });
  }

  onTyping(event) {
    console.log(event.target.id);
    this.setState({
      id: event.target.value,
    });
  }

  render() {
    return (
      <form className={styles.form}>
        <h3 className={styles.title}>Delete</h3>
        <div className={styles.control}>
          <label>The ID you want to delete:</label>
          <input
            id="id"
            type="text"
            placeholder="Enter ID"
            onChange={this.onTyping}
            required
          />
        </div>
        <button onClick={this.delete} className={styles.button} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Delete;

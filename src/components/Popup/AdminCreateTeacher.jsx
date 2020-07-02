import React from "react";
import styles from './form.module.scss';
import axios from 'axios';


// Post object would need a name

class AdminCreateTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      respDto:{},
    };
    this.onEmailTyping = this.onEmailTyping.bind(this);
    this.onFirstNameTyping = this.onFirstNameTyping.bind(this);
    this.onLastNameTyping = this.onLastNameTyping.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  //目前是，如果拿不回来你们的窗口不会关。所以要强行关掉
  async sendDto(){
    const newTeacher = {
      email:this.state.email,
      firstName:this.state.firstName,
      lastName:this.state.lastName,
    }
    const teacherDTO = JSON.stringify(newTeacher);


    //这里的格式千万要注意。不要放一个{ }到post 的第二个argument。因为这样后端的格式就不是JSON
      console.log(teacherDTO);
     await axios
       .post(
         "http://localhost:8080/users/teachers",
         teacherDTO ,
         {
           headers: {
             "Content-Type": "application/json",
           },
         }
       )
       .then((res) => this.setState({ respDto: res.data }));
    console.log(this.state.respDto);
  }
  async onSubmit(event){
    event.preventDefault();
    await this.sendDto();
    this.props.onClick(event);

    // this is to resemble sending JSON to the server

  }

  onEmailTyping(event){
    console.log(event.target.email);
    this.setState({
      email: event.target.value,
    });
  }
  onFirstNameTyping(event){
    console.log(event.target.firstName);
    this.setState({
      firstName: event.target.value,
    });
  }
  onLastNameTyping(event){
    console.log(event.target.lastName);
    this.setState({
      lastName: event.target.value,
    });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.onSubmit}>
        <h3 className={styles.title}>Create New Teacher</h3>
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
          className={styles.button}
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default AdminCreateTeacher;

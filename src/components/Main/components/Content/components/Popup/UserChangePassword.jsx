import React from "react";
import styles from './form.module.scss';
import axios from 'axios';


// Post object would need a name

class UserChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      uuid: "",
      respDto:{},
    };
    this.onPasswordTyping = this.onPasswordTyping.bind(this);
    this.onUUIDTyping = this.onUUIDTyping.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
    //目前是，如果拿不回来你们的窗口不会关。所以要强行关掉
    async sendDto(){
      const newPassword = {
        password:this.state.password,
      }
      const passwordDTO = JSON.stringify(newPassword);
      const uuid = this.state.uuid;
      //这里的格式千万要注意。不要放一个{ }到post 的第二个argument。因为这样后端的格式就不是JSON
      console.log(passwordDTO);
      await axios
        .put(
          "http://localhost:8080/users/" + uuid,
          passwordDTO ,
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

    onPasswordTyping(event){
      this.setState({
        password: event.target.value,
      });
    }

    onUUIDTyping(event){
      this.setState({
        uuid: event.target.value,
      });
    }

  render() {
    return (
      <form className={styles.form} onSubmit={this.onSubmit}>
        <h3 className={styles.title}>Change Password</h3>
        <div className={styles.control}>
        <label>UUID:</label>
          <input
            type="text"
            placeholder="Enter UUID"
            maxLength={36}
            onChange={this.onUUIDTyping}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter New Password"
            maxLength={30}
            onChange={this.onPasswordTyping}
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
export default UserChangePassword;

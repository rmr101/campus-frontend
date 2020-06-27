import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: true,
    };
    this.togglePop = this.togglePop.bind(this);
  }
  togglePop(role) {
    //set logged in to true
    this.props.onClick(role);
    
    this.setState({
      seen: !this.state.seen,
    });
  }
  render() {
    return (
      <div>
        {this.state.seen ? (
          <LoginForm toggle={this.togglePop} />
        ) : null}
      </div>
    );
  }
}

export default Login;

import React from 'react';
import styles from './Button.module.scss';
import Popup from './../Popup';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
    };
    this.togglePop = this.togglePop.bind(this);
  }
  togglePop() {
    this.setState({
      seen: !this.state.seen,
    });
  }

  buttonType(type){
    switch(type){
      case "DELETE":
        return styles.deleteBtn;
      case "UPDATE":
        return styles.updateBtn;
      case "CREATE":
        return styles.createBtn;
      default:
        return null;
    }
  }
  renderButton(type){
     switch(type){
      case "DELETE":
        return (
          <React.Fragment>
        <button
          className={`${styles.btn} + ${this.buttonType("DELETE")}`}
          onClick={this.togglePop}
        >
          Delete
        </button>
        {this.state.seen ? (
          <Popup type={"DELETE"} toggle={this.togglePop} />
        ) : null}
        </React.Fragment>
        );
      case "UPDATE":
        return <React.Fragment>
        <button
          className={`${styles.btn} + ${this.buttonType("UPDATE")}`}
          onClick={this.togglePop}
        >
          Update
        </button>
        {this.state.seen ? (
          <Popup type={"UPDATE"} toggle={this.togglePop} />
        ) : null}
        </React.Fragment>
      case "CREATE":
        return <React.Fragment>
        <button
          className={`${styles.btn} + ${this.buttonType("CREATE")}`}
          onClick={this.togglePop}
        >
          Create
        </button>
        {this.state.seen ? (
          <Popup type={"CREATE"} toggle={this.togglePop} />
        ) : null}</React.Fragment>
      default:
        return null;
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>
        {this.renderButton(this.props.type)}
      </div>
    );
  }
}

export default Button;
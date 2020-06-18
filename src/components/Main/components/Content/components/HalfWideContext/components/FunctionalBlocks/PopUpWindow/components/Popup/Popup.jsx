import React from "react";
import styles from "./Popup.module.scss";


class Popup extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <div className={styles.content}>
            <span className={styles.close} onClick={this.props.toggle}>
              &times;
            </span>
            <form>
              <h3>Register!</h3>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <br />
              <input type="submit" />
            </form>
          </div>
        </div>
        <div className={styles.mask}></div>
      </div>
    );
  }
}

export default Popup;
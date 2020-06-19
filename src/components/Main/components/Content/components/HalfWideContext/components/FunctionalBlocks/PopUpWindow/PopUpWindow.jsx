import React from 'react';
import styles from './PopUpWindow.module.scss';
import Popup from './components/Popup';

class PopUpWindow extends React.Component {
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
  render() {
    return (
      <div>
        <div className={styles.btn} onClick={this.togglePop}>
          <button>Try it</button>
        </div>
        {this.state.seen ? <Popup toggle={this.togglePop} /> : null}
      </div>
    );
  }
}

export default PopUpWindow;
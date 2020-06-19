import React from 'react';
import styles from './FaqBody.module.scss';


class FaqBody extends React.Component {
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
        <div className={styles.text}>
          {this.props.context}
        </div>
      </div>
    );
  }
}

export default FaqBody;
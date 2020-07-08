import React from 'react';
import styles from "./NavAvatar.module.scss";
import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectAvatar from './components/SelectAvatar';
import avatarStyles from './components/SelectAvatar/SelectAvatar.module.scss';

class NavAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionPanelShow: false,
      icon: faUserTie,
      color: avatarStyles.green,
      background: avatarStyles.light,
    };
    this.toggleSelectionPanel = this.toggleSelectionPanel.bind(this);
    this.changeAvatar = this.changeAvatar.bind(this);
  }
  toggleSelectionPanel() {
    this.setState({
      selectionPanelShow: !this.state.selectionPanelShow,
    });
  }
  changeAvatar(icon,color,background) {
    console.log(color);
    this.setState({
      selectionPanelShow: false,
      icon: icon,
      color: color,
      background: background,
    });
  }

  render() {
    return (
      <div className={`${styles.wrapper} ${this.state.background}`}>
        <div
          className={`${styles.avatar} ${this.state.color}`}
          onClick={this.toggleSelectionPanel}
        >
          <FontAwesomeIcon icon={this.state.icon} />
        </div>
        {this.state.selectionPanelShow ? (
          <SelectAvatar
            onClick={this.changeAvatar}
            icon={this.state.icon}
            color={this.state.color}
            background={this.state.background}
          />
        ) : null}
      </div>
    );
  }
};
export default NavAvatar;

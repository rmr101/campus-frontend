import React from 'react';
import styles from "./NavAvatar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectAvatar from './components/SelectAvatar';
import avatarStyles from './components/SelectAvatar/SelectAvatar.module.scss';
import { faUserTie, faUserGraduate,faUserSecret } from "@fortawesome/free-solid-svg-icons";
import getUserInfo from "../../../../apis/getUserInfo";

const IconObj = {
  faUserTie,
  faUserGraduate,
  faUserSecret,
};

class NavAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionPanelShow: false,
      icon: "faUserTie",
      color: "green",
      background: "light",
    };
   
    this.toggleSelectionPanel = this.toggleSelectionPanel.bind(this);
    this.changeAvatar = this.changeAvatar.bind(this);
  }
  toggleSelectionPanel() {
    this.setState({
      selectionPanelShow: !this.state.selectionPanelShow,
    });
  }
  changeAvatar(icon, color, background) {
    this.setState(
      {
        selectionPanelShow: false,
        icon: icon,
        color: color,
        background: background,
      },
    );
    
  }

  async getAvatar(){
    const {userRole, userID} = this.props
    const {avatar} = await getUserInfo(userRole, userID);
    const avatarArray = avatar?avatar.split(" "):[];
    if(avatarArray.length !== 0){
      this.setState({
        icon: avatarArray[0],
        color: avatarArray[1],
        background: avatarArray[2],
      })
    }
  }
  componentDidMount(){
    this.getAvatar();
  }
  render() {
    return (
      <div
        className={`${styles.wrapper} ${avatarStyles[this.state.background]}`}
      >
        <div
          data-testid="avatar"
          className={`${styles.avatar} ${avatarStyles[this.state.color]}`}
          onClick={this.toggleSelectionPanel}
        >
          <FontAwesomeIcon icon={IconObj[this.state.icon]} />
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


export default NavAvatar

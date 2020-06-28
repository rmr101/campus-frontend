import React from "react";
import styles from "./Lists.module.scss";
import Link from './components/Link';
import { LinksRepo } from "./LinksRenderMapper";

class Lists extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  renderLink(){
    let linksArray = [];
    this.props.linkIDArray.forEach((linkID) => {
      let [{name,content}] = LinksRepo.filter((links) => links.LinkId === linkID);
      linksArray.push(
        <Link
          key={"Link_ID" + Math.random()}
          name={name}
          content={content}
          onClick = {this.props.onClick}
        />
      );
    });
    return linksArray; 
  }
  render(){
  return (
    <div className={styles.wrapper}>
      {this.renderLink()}
    </div>)
};
}

export default Lists;

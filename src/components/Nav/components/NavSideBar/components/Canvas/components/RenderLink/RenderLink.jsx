import React from 'react';
import styles from './RenderLink.module.scss';

class RenderLink extends React.Component{
  
  constructor(props){
    super(props);
  }
  render(){
  return this.props.RenderArray.map((obj) => (
    <div
      onClick={(e) => this.props.onClick(e, obj.name, obj.id, "DisplayFull")}
      className={styles.links}
      key={"id" + Math.random()}
    >
      {obj.name}
    </div>
  ));
}
}

export default RenderLink;
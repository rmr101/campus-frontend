import React, { Component } from "react";
import AddEditForm from "./components/AddEditForm";
import styles from "./Crud.module.scss";
import Delete from "./components/Delete";

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      seen: !prevState.seen,
    }));
  };

  render() {
    // const closeBtn = (
    //   <button className="close" onClick={this.toggle}>
    //     &times;
    //   </button>
    // );

    const label = this.props.buttonLabel;

    let btn = "";
    // let title = "";

    if (label === "Edit") {
        btn = (
        <button
          onClick={this.toggle}
        >
          {label}
        </button>
        
      );
    //   title = "Edit Item";
    } else if(label === "Add"){
        btn = (
        <button
          onClick={this.toggle}
        >
          {label}
        </button>
      );
    //   title = "Add New Item";
    } else if(label === "Delete"){
      btn= <button
      onClick={<Delete />}
    >
      {label}
    </button>
    }

    return (
        <div className={styles.mask}>
        <div className={styles.wrapper}>
            <span className={styles.close} onClick={this.toggle}>
              &times;
            </span>
            <AddEditForm
              addItemToState={this.props.addItemToState}
              updateState={this.props.updateState}
              toggle={this.toggle}
              item={this.props.item}
            />
        </div>
      </div>
    //   <div>
    //     {button}
    //     <Modal
    //       isOpen={this.state.modal}
    //       toggle={this.toggle}
    //       className={this.props.className}
    //     >
    //       <ModalHeader toggle={this.toggle} close={closeBtn}>
    //         {title}
    //       </ModalHeader>
    //       <ModalBody>
    //         <AddEditForm
    //           addItemToState={this.props.addItemToState}
    //           updateState={this.props.updateState}
    //           toggle={this.toggle}
    //           item={this.props.item}
    //         />
    //       </ModalBody>
    //     </Modal>
    //   </div>
    );
  }
}

export default Crud;

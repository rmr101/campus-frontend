import React from "react";
import axios from "axios";
import styles from "./Delete.module.scss";

class Delete extends React.Component {
  deleteItem = (id) => {
    let confirmDelete = window.confirm("Delete item forever?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8080/students/${this.state.id}`)
        .then((response) => response.json())
        .then(item => {
          this.props.deleteItemFromState(id);
        })
        .catch((err) => console.log(err));
    }
  };
}

export default Delete;

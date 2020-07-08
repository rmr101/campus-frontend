import React from "react";
import getUserInfo from "./../../../../../../apis/getUserInfo";
import Button from "../../../../../Button";
import SearchBar from "../../../../../SearchBar";
import styles from "./UserManagement.module.scss";

class UserManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      role: "student",
      nameList:[],
    };
  this.onSubmit=this.onSubmit.bind(this);
  }


  async getUserName() {
    console.log(this.state.role);
    try{
    const nameList = await getUserInfo(this.state.role,this.state.search);
    console.log(nameList);
    this.setState({
      nameList: [nameList],
    });}
    catch(error){
      console.log('error: ',error)
      this.setState({error});
    }

    console.log(this.state.nameList);
  }

  async onSubmit(e){
    e.preventDefault();
    await this.getUserName();
    }

  handleRoleTemp=(role)=>{
    this.setState({
      role:role
    });
    console.log(this.state.role);
  }
 
  handleSearchTemp=(search)=>{
    this.setState({
      search:search,
    });
    console.log(this.state.search);
  }

  

  render() {
    return (
      <div>
        <SearchBar
          search={this.state.search}
          onSearchChange={this.handleSearchTemp}
          role={this.state.role}
          onRoleChange={this.handleRoleTemp}
          onClick={this.onSubmit}
        />
        <div className={styles.wrapper}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>No.</th>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>
                  <Button type={"CREATE"} />
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.nameList.map(function (user, index) {
                return (
                  <tr className={styles.tr} key={index}>
                    <td className={styles.td}>{index + 1}</td>
                    <td className={styles.td}>{user.name}</td>
                    <td className={styles.td}>
                      <Button type="UPDATE"></Button>
                    </td>
                    <td>
                      <Button type="DELETE"></Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserManagement;

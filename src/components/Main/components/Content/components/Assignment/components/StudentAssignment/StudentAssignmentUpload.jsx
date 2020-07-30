import React from 'react';
import Button from '../../../../../../../Button';
import Loader from '../../../../../../../Loader';
import {connect} from 'react-redux';
import getPreSignedUploadLink from "../../../../../../../../apis/AWS/getPreSignedUploadLink";
import axios from 'axios';


const fileSizeToMB=(size)=> (((size)/1024)/1024).toFixed(0);
const truncateName=(name)=> {
  let fileSuffixIndex = name.lastIndexOf(".")
  let fileSuffix = name.slice(fileSuffixIndex - 1, name.length);
  return name.length > 16
    ? name.slice(0, 6) +
      "..." +
      name.slice(fileSuffixIndex - 5, fileSuffixIndex) +
      fileSuffix
    : name;}

const FILE_LIMIT = 15;//MB
const FILE_ACCEPT_TYPE ="application/pdf";

class StudentAssignmentUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      file: null,
      fileName: "",
      fileType: "application/pdf",
      fileSize: 0,
      success: false,
      loading: false,
      noSupportCredential:false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }
  handleChange(e) {
    e.target.files.length === 0
      ? console.log("file is not included")
      : this.setState(
          {
            loaded: true,
            success: false,
            fileName: e.target.files[0] ? e.target.files[0].name : "",
            fileSize: e.target.files[0] ? e.target.files[0].size : 0,
            fileType: e.target.files[0]
              ? e.target.files[0].type
              : "application/pdf",
            file: e.target.files[0],
          },
          () => console.log(this.state.file)
        );
  }
  async getPreSignedUrl(id) {
    //currently using date as object key.
    const fileName = new Date() + ".pdf";
 
    const { url } = await getPreSignedUploadLink(fileName, id);
    console.log(url);
    this.uploadToAWS(url);
  }
  async uploadToAWS(url) {
    await axios
      .put(url, this.state.file)
      .then(() => 
        this.setState(
          {
            loaded: false,
            success: true,
            loading: false,
          },
          () => setTimeout(() => this.setState({ success: false }), 3000)
        ))
      .catch( err =>{
        if (err.response.status === 403) {
          this.setState(
            {
              loaded: false,
              loading: false,
              noSupportCredential: true,
            },
            () =>
              setTimeout(
                () => this.setState({ noSupportCredential: false }),
                3000
              )
          );
          console.log(err.response);
        } else {
          console.log(err.response);
        }
        });
  }

  handleConfirm(e) {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    this.getPreSignedUrl(this.props.id);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Loader color="upload" />
        ) : (
          <Button
            noSupportCredential={this.state.noSupportCredential}
            type={"UPLOAD"}
            handleConfirm={this.handleConfirm}
            onChange={this.handleChange}
            loaded={this.state.loaded}
            fileName={truncateName(this.state.fileName)}
            wrongType={this.state.fileType !== FILE_ACCEPT_TYPE}
            overSize={fileSizeToMB(this.state.fileSize) > FILE_LIMIT}
            success={this.state.success}
          />
        )}
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) =>({
  id: state.headerHistory.content.id
})
const StudentAssignmentUploadContainer = connect(mapStateToProps)(StudentAssignmentUpload);
export default StudentAssignmentUploadContainer;
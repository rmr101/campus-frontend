import React from 'react';
import Button from '../Button';
import S3 from "react-aws-s3";
import {
  SecretAccessKey,
  AccessKeyID,
} from "./JackyAWSKey";

const config = {
  bucketName: "campus-file-system",
  dirName: "assignment" /* optional */,
  region: "ap-southeast-2",
  accessKeyId: AccessKeyID,
  secretAccessKey: SecretAccessKey,
};
const ReactS3Client = new S3(config);
/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */

const fileSizeToMB=(size)=> (((size)/1024)/1024).toFixed(0)
const FILE_LIMIT = 25;//MB
const FILE_ACCEPT_TYPE ="application/pdf";
class StudentAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      file: null,
      fileName: "",
      fileType: "application/pdf",
      fileSize: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }
  handleChange(e) {
    console.log(e.target.files[0]);
    this.setState({
      loaded: true,
      fileName: e.target.files[0].name,
      fileSize: e.target.files[0].size,
      fileType: e.target.files[0].type,
      file: e.target.files[0],
    });
  }
  //TODO: style input, using the Label and hide button.
  //TODO: pass the secret key to team mate
  handleConfirm(e) {
    e.preventDefault();
    /* This is optional */
    const newFileName = "test-file";
    ReactS3Client.uploadFile(this.state.file, newFileName)
      .then((data) => {
        console.log(data);
        this.setState({
          loaded: false,
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <div>
        <Button
          type={"UPLOAD"}
          handleConfirm={this.handleConfirm}
          onChange={this.handleChange}
          loaded={this.state.loaded}
          fileName={this.state.fileName}
          wrongType={this.state.fileType !== FILE_ACCEPT_TYPE}
          overSize={fileSizeToMB(this.state.fileSize) > FILE_LIMIT}
        />
      </div>
    );
  }
};
export default StudentAssignment;
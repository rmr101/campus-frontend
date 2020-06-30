import React from 'react';
import Button from '../Button';
import S3 from "react-aws-s3";

// import the AWS S3 key
let SecretAccessKey, AccessKeyID;
try {
    const AWSKey = require("./JackyAWSKey");
    console.log(AWSKey);
    SecretAccessKey = AWSKey.SecretAccessKey;
    AccessKeyID = AWSKey.AccessKeyID;
}catch(err){
  console.log("You need the IAM key to access to AWS S3, ask jacky for that ^.^;")
  SecretAccessKey = "";
  AccessKeyID= "";
}

const config = {
  bucketName: "campus-file-system",
  dirName: "assignment" /* optional */,
  region: "ap-southeast-2",
  accessKeyId: AccessKeyID,
  secretAccessKey: SecretAccessKey,
};
const ReactS3Client = new S3(config);
/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */

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
      success: false,
      uploadClickable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }
  handleChange(e) {
    console.log(e.target.files[0]);
    this.setState({
      loaded: true,
      success: false,
      fileName: e.target.files[0] ? e.target.files[0].name : "",
      fileSize: e.target.files[0] ? e.target.files[0].size : 0,
      fileType: e.target.files[0] ? e.target.files[0].type : "application/pdf",
      file: e.target.files[0],
    });
  }
  //TODO: pass the secret key to team mate
  handleConfirm(e) {
    e.preventDefault();
    /* This is optional */
    const newFileName = new Date();

    //TODO: pass the secret key to team mate
    this.state.uploadClickable ? ReactS3Client
      .uploadFile(this.state.file, newFileName)
      .then((data) => {
        console.log(data);
        this.setState(
          {
            loaded: false,
            success: true,
            uploadClickable: true,
          },
          () => setTimeout(() => this.setState({ success: false }), 3000)
        );
      })
      .catch((err) => console.error(err)):console.log("Please wait till upload finish...");
      //this is to prevent uploaded multiple time.
      this.setState ({
        uploadClickable: false,
      });
  }
  render() {
    return (
      <div>
        <Button
          type={"UPLOAD"}
          handleConfirm={this.handleConfirm}
          onChange={this.handleChange}
          loaded={this.state.loaded}
          fileName={truncateName(this.state.fileName)}
          wrongType={this.state.fileType !== FILE_ACCEPT_TYPE}
          overSize={fileSizeToMB(this.state.fileSize) > FILE_LIMIT}
          success={this.state.success}
        />
      </div>
    );
  }
};
export default StudentAssignment;
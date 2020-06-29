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


class StudentAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }
  handleChange(e) {
    this.setState({
      loaded: true,
      eventTargetValue: e.target.value,
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
        />
      </div>
    );
  }
};
export default StudentAssignment;
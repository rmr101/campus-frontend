import S3 from "react-aws-s3";
// import the AWS S3 key

let SecretAccessKey, AccessKeyID;
try {
  const AWSKey = require("./JackyAWSKey");
  SecretAccessKey = AWSKey.SecretAccessKey;
  AccessKeyID = AWSKey.AccessKeyID;
} catch (err) {
  console.log(
    "You need the IAM key to access to AWS S3, ask jacky for that ^.^;"
  );
  SecretAccessKey = "";
  AccessKeyID = "";
}

const config = {
  bucketName: "campus-file-system",
  dirName: "assignment" /* optional */,
  region: "ap-southeast-2",
  accessKeyId: AccessKeyID,
  secretAccessKey: SecretAccessKey,
};
const ReactS3Client = new S3(config);
export default ReactS3Client;

import AWS from "aws-sdk";
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

// bucketName:  "campus-file-system"
//   dirName: "assignment" /* optional */,
//   region: "ap-southeast-2",

AWS.config.update({
  accessKeyId: AccessKeyID,
  secretAccessKey: SecretAccessKey,
});

const ReactS3Download=(key)=>{
  let S3 = new AWS.S3();
  S3.getObject({ Bucket: "campus-file-system", Key: key }, (error, data) => {
    if (error != null) {
      console.log(key);
      console.log("Failed to retrieve an object: " + error);
    } else {
      console.log("Loaded " + data.ContentLength + " bytes");
      {
        let blob = new Blob([data.Body], { type: data.ContentType });
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = Date().split(" ").slice(1, 5).join("_");
        link.click();
      }
    }
  })
}

export default ReactS3Download;

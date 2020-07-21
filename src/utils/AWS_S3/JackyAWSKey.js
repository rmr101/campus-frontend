// Useless Key now:
export const AccessKeyID = "AKIAZVPGVNCTNKYMLHJC";
export const SecretAccessKey = "T0yPtHQpx4E06i81zZeeCJqRisnIcnNRQYIX0/LT";

//arn:aws:iam::664593066150:user/jacky

// {
//     "Version": "2012-10-17",
//     "Id": "http referer policy example",
//     "Statement": [
//         {
//             "Sid": "Allow all kind of http requests originating from http://www.your-website.com and https://www.your-website.com",
//             "Effect": "Allow",
//             "Principal": {
//                 "AWS": "arn:aws:iam::664593066150:user/jacky"
//             },
//             "Action": [
//                 "s3:PutObject",
//                 "s3:PutObjectAcl",
//                 "s3:GetObject",
//                 "s3:GetObjectAcl",
//                 "s3:DeleteObject"
//             ],
//             "Resource": "arn:aws:s3:::campus-file-system/*",
//             "Condition": {
//                 "StringLike": {
//                     "aws:Referer": [
//                         "https://localhost:3000",
//                         "http://localhost:3000"
//                     ]
//                 }
//             }
//         }
//     ]
// }

// <?xml version="1.0" encoding="UTF-8"?>
// <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
// <CORSRule>
//     <AllowedOrigin>*</AllowedOrigin>
//     <AllowedMethod>PUT</AllowedMethod>
//     <AllowedMethod>POST</AllowedMethod>
//     <AllowedMethod>DELETE</AllowedMethod>
//     <AllowedHeader>*</AllowedHeader>
// </CORSRule>
// <CORSRule>
//     <AllowedOrigin>*</AllowedOrigin>
//     <AllowedMethod>GET</AllowedMethod>
// </CORSRule>
// </CORSConfiguration>




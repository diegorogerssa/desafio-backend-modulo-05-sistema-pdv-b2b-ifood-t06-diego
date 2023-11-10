const aws = require('aws-sdk');
require('dotenv').config();

const point = new aws.Endpoint(process.env.BUCKET_POINT);

const s3 = new aws.S3({
  endpoint: point,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
  credentials: {
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.APPLICATION_KEY,
  },
});

module.exports = s3;

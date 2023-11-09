const dotenv = require('dotenv');
const aws = require('../../config/multer/aws');

dotenv.config();

const deleteImage = async (path) => {
  await aws
    .deleteObject({
      Bucket: process.env.BUCKET_NAME,
      Key: path,
    })
    .promise();
};

module.exports = deleteImage;

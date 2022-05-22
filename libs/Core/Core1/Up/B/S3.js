import aws from "aws-sdk"
import fs from "fs"

function DeleteOnePromise(bucket, key) {
  const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  })
  
  return s3.deleteObject({
    Bucket: bucket,
    Key: key
  }).promise()
}

async function asyDeleteMany(bucket, keyArr) {
  
  const promiseArr = []
  keyArr = keyArr || []
  for(const key of keyArr) {
    if(!key) { continue }
    promiseArr.push(DeleteOnePromise(bucket, key))
  }
  const resArr = await Promise.all(promiseArr)
  
  return resArr
}

async function asyDeleteOne(bucket, key) {
  const res = await DeleteOnePromise(bucket, key)
  return res
}

function UploadOnePromise(bucket, file) {

  const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  })

  const {filePath, key} = file
  return s3.upload({
    Bucket: bucket,
    Key: key,
    Body: fs.createReadStream(filePath),
    // ACL: 'public-read'
  }).promise()
}

async function asyUploadOne(bucket, file) {
  const resArr = await asyUploadMany(bucket, [file])
  return resArr[0]
}

async function asyUploadMany(bucket, fileArr) {
  const promiseArr = []
  for(const file of fileArr) {
    promiseArr.push(UploadOnePromise(bucket, file))
  }
  const resArr = await Promise.all(promiseArr)
  return resArr
}

async function asyUploadOnePlusSmallOne(bucket, file) {
  const { filePath, key, smallFilePath, smallKey } = file
  const file1 = { filePath, key }
  const file2 = { filePath: smallFilePath, key: smallKey }

  const res1 = await asyUploadOne(bucket, file1)
  const res2 = await asyUploadOne(bucket, file2)

  return [res1, res2]
}

async function asyUploadManyPlusSmall(bucket, fileArr) {

  const resArr = []
  for(const file of fileArr) {
    const res = await asyUploadOnePlusSmallOne(bucket, file)
    resArr.push(res)
  }
  return resArr
}



export {
  asyUploadOne,
  asyUploadMany,
  asyDeleteOne,
  asyDeleteMany,
  asyUploadManyPlusSmall
}
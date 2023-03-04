import { 
  DeleteObjectCommand,
  PutObjectCommand, 
  S3Client
} from "@aws-sdk/client-s3"
import fs from "fs"
import { bConfig } from "../../../../../bConfig.js"

// aws-sdk assumes the following are set for credentials
// process.env.AWS_ACCESS_KEY_ID
// process.env.AWS_SECRET_ACCESS_KEY

function DeleteOnePromise(bucket, key) {
  
  const s3 = new S3Client({
    region: bConfig.awsRegion
  })
  const command = new DeleteObjectCommand({
    Bucket: bucket,
    Key: key
  })
  
  return s3.send(command)
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

  const s3 = new S3Client({
    region: bConfig.awsRegion
  })

  const {filePath, key} = file

  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: fs.createReadStream(filePath)
  })
  
  return s3.send(command)
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

function S3Url(bucket, key) {
  if(!bucket || !key) return ""
  // example  https://wima-movic-dev.s3.amazonaws.com/sm-xfdsfs.jpg
  return `https://${bucket}.${bConfig.s3Domain}/${key}`
}



export {
  asyUploadOne,
  asyUploadMany,
  asyDeleteOne,
  asyDeleteMany,
  asyUploadOnePlusSmallOne,
  asyUploadManyPlusSmall,
  S3Url
}
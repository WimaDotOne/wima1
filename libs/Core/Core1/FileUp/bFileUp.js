import { asyNewTempFolder, asyRemoveTempFolder } from "./B/MakeTempFolder.js"
import {   
  asyUploadOne,
  asyUploadMany,
  asyDeleteOne,
  asyDeleteMany,
  asyUploadOnePlusSmallOne,
  asyUploadManyPlusSmall,
  S3Url
} from "./B/S3.js"

import { asyShrinkImageFiles } from "./B/ShrinkImageFiles.js"
import { iImageMulter } from "./B/iImageMulter.js"

export {
  asyNewTempFolder,
  asyRemoveTempFolder,

  asyUploadOne,
  asyUploadMany,
  asyDeleteOne,
  asyDeleteMany,
  asyUploadOnePlusSmallOne,
  asyUploadManyPlusSmall,
  S3Url,

  asyShrinkImageFiles,

  iImageMulter
}
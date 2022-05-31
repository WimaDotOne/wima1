import { asyNewTempFolder, asyRemoveTempFolder } from "./B/MakeTempFolder.js"
import {   
  asyUploadOne,
  asyUploadMany,
  asyDeleteOne,
  asyDeleteMany,
  asyUploadOnePlusSmallOne,
  asyUploadManyPlusSmall 
} from "./B/S3.js"

import { asyShrinkImageFiles } from "./B/ShrinkImageFiles.js"

export {
  asyNewTempFolder,
  asyRemoveTempFolder,

  asyUploadOne,
  asyUploadMany,
  asyDeleteOne,
  asyDeleteMany,
  asyUploadOnePlusSmallOne,
  asyUploadManyPlusSmall,

  asyShrinkImageFiles
}
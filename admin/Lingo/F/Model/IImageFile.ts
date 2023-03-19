export interface IImageFile {
  _id: string
  urlSmall: string
  name: string
}

export interface IImageFile2 extends IImageFile {
  selected?: boolean
}

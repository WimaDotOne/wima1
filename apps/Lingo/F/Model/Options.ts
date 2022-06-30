
export interface IOption {
  value: string
  text: string
  imgUrl?: string
}

export class Options {
  hasImage: boolean
  array: IOption[] = []

  constructor(hasImage?: boolean) {
    this.hasImage = !!hasImage
  }

  Add(value: string, text:string, imgUrl?: string) {
    this.array.push({value, text, imgUrl})
  }
}
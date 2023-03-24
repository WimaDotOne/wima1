
export interface IWord {
  word: string
  pinYin?: string
  translate: string
  imageUrl: string
}

export type IPage = Array<IWord>

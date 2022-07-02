
export interface IWord {
  word: string
  pinYin?: string
  translate: string
  illustration: string
}

export type IPage = Array<IWord>

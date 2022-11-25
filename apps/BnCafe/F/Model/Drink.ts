
export interface IStep {
  image: string,
  words: string
}

export type StepFunction = (size: string) => IStep

export interface IDrink {
  id: string,
  name: string,
  code: string,
  steps: Array<StepFunction>,
  price1: number,
  price2: number,
  price3: number,
  price4?: number
}


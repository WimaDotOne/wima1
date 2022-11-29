
export interface IStep {
  image: string
  words: string
}

export type StepFunction = (size: string) => IStep

export interface IDrink {
  id: string
  name: string
  code: string
  canDecaf?: boolean
  canLightIce?: boolean
  twoPercent?: boolean
  whole?: boolean
  oat?: boolean
  almond?: boolean
  whippedCream?: boolean
  steps: Array<StepFunction>
  price1: number
  price2: number
  price3: number
  price4?: number
}


export interface ISvg {
  width: number
  fill? : string
  stroke?: string
  strokeWidth?: number
}

export interface ISvgArrow extends ISvg {
  left?: boolean
  right?: boolean
  up?: boolean
  down?: boolean
}

export interface ISvgIcon {
  name: string
  width: number
  color?: string
  strokeWidth?: number
}
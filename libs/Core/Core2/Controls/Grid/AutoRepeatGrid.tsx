import { ReactNode } from "react";
import cl from "./AutoRepeatGrid.module.scss"

interface IAutoRepeatGridProp {
  children: ReactNode
  autoFit?: boolean
  autoFill?: boolean
  cellMinWidth: number
  columnGap?: number
  rowGap?: number
  padding?: number
  paddingTop?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingRight?: number
}
interface IGridStyle {
  gridTemplateColumns?: string
  columnGap?: string
  rowGap?: string
  padding?: string
  paddingTop?: string
  paddingBottom?: string
  paddingLeft?: string
  paddingRight?: string
}
export function AutoRepeatGrid({
  children,
  autoFit,
  autoFill,
  cellMinWidth,
  columnGap,
  rowGap,
  padding,
  paddingTop, paddingBottom, paddingLeft, paddingRight
}: IAutoRepeatGridProp) {

  const auto = autoFit ? "auto-fit" : "auto-fill"
  cellMinWidth = cellMinWidth || 50
  columnGap = columnGap || 5
  rowGap = rowGap || 5
  paddingTop = paddingTop || padding || 0
  paddingBottom = paddingBottom || padding || 0
  paddingLeft = paddingLeft || padding || 0
  paddingRight = paddingRight || padding || 0

  const gridStyle: IGridStyle = {
    gridTemplateColumns: `repeat(${auto}, minmax(${cellMinWidth}px, 1fr))`,
    columnGap: columnGap+"px",
    rowGap: rowGap+"px",
    paddingLeft: paddingLeft+"px",
    paddingRight: paddingRight+"px",
    paddingTop: paddingTop+"px",
    paddingBottom: paddingBottom+"px"
  }

  return(<>
    <div className={cl.grid} style={gridStyle}>
    { children }
    </div>
  </>)
}
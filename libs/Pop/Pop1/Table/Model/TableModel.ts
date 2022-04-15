
export interface IColumnInfo {
  title: string
  width: number
}
export interface IRecord {
  id: string
  attributes: Array<IAttribute>
}

export interface IAttribute {
  type: string,
  value: string
}

export const AttributeType = {
  text: "text",
  icon: "icon"
}

export class TableModel {
  schema: Array<IColumnInfo>
  data: Array<IRecord>
  narrowScreenWidth: number = 800
  selectedRowColor: string = "#999"

  constructor(schema: Array<IColumnInfo>, data: Array<IRecord>) {
    this.schema = schema
    this.data = data
  }
}


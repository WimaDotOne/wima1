
export interface IColumnInfo {
  title: string
  width: number
}
export interface IRecord {
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

  constructor(schema: Array<IColumnInfo>, data: Array<IRecord>) {
    this.schema = schema
    this.data = data
  }
}


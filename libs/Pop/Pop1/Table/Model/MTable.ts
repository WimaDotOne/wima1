
export interface IColumnInfo {
  title: string
}
export interface IRecord {
  text: string
}

export class MTable {
  schema: Array<IColumnInfo>
  data: Array<IRecord>

  constructor(schema: Array<IColumnInfo>, data: Array<IRecord>) {
    this.schema = schema
    this.data = data
  }
}
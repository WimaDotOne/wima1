export interface ISocialNeed {
  _id: string
  socialAccountId: string
  name: string
  shortDescription?: string
  description?: string
  willPay?: boolean
}
export interface ISocialService {
  _id: string,
  socialAccountId: string,
  name: string,
  shortDescription?: string,
  description?: string,
  price?: string,
  isGoods?: boolean
}
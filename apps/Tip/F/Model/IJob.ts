export interface IPhoto {
  s3Key?: string
  s3KeySmall?: string
  url?: string
  urlSmall?: string
}

export interface IJob {
  id: string
  jobName: string
  isJobPublic?: boolean
  placeName?: string
  placeId?: string
  firstName?: string
  selfPhoto?: IPhoto
  selfDescription?: string
}
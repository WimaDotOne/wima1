interface IS3Image {
  url?: string
  urlSmall?: string
}

export interface IThankyJob {
  _id: string
  jobName?: string
  placeName?: string
  placeId?: string
  firstName?: string
  photo?: IS3Image
  aboutMe?: string
}

export type InstagramMediaType = "CAROUSEL_ALBUM" | "IMAGE" | "VIDEO";

export type InstagramMedia = {
  id: string,
  permalink: string,
  like_count: number,
  comments_count: number,
  caption: string,
  media_type: InstagramMediaType,
  media_product_type: "AD" | "FEED" | "STORY" | "REELS",
  media_url: string,
  thumbnail_url?: string,
  timestamp: string,
  children?: {
    data: {
      id: string,
      media_type: InstagramMediaType,
      media_url: string,
      thumbnail_url?: string,
      timestamp: string,
    }[]
  },
}

export type InstagramProfile = {
  username: string,
  account_type: "BUSINESS" | "MEDIA_CREATOR" | "PERSONAL",
  website: string,
  name: string,
  followers_count: number,
  media_count: number,
  biography: string,
  profile_picture_url: string,
}

export type InstagramAPIResponse = InstagramProfile & {
  media: { data: InstagramMedia[] }
};
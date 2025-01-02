import { css } from "hono/css";
// import InstagramFeedItem from "./InstagramFeedItem.tsx";

export type Media = {
  id: string,
  permalink: string,
  like_count: number,
  comments_count: number,
  caption: string,
  media_type: "CAROUSEL_ALBUM" | "IMAGE" | "VIDEO",
  media_product_type: "AD" | "FEED" | "STORY" | "REELS",
  media_url: string,
  thumbnail_url?: string,
  timestamp: string,
  children: {
    data: {
      id: string,
      media_type: "CAROUSEL_ALBUM" | "IMAGE" | "VIDEO",
      media_url: string,
      thumbnail_url?: string,
      timestamp: string,
    }[]
  },

}

type Props = {
  media: Media;
};

export default function ({ media }: Props) {

  const componentStyles = css`
    --roundness: 13px;
  
    background-color: whitesmoke;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: cover;
    background-image: url('${media.media_url}');
    border-radius: var(--roundness);
    aspect-ratio: 1;
  `;

  return (
    <div class={componentStyles}>
    </div>
  );
}

import { css } from "hono/css";
import InstagramFeedItem from "./InstagramFeedItem.tsx";

const componentStyles = css`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
`;

type Props = {
  accessToken: string;
};

export default async function ({ accessToken }: Props) {
  const mediaLimit = 12;

  // https://developers.facebook.com/docs/instagram-platform/reference/instagram-media
  const res = await fetch(
    `https://graph.instagram.com/me?access_token=${accessToken}&fields=username,account_type,website,name,followers_count,biography,profile_picture_url,media.limit(${mediaLimit}){caption,media_type,media_product_type,media_url,permalink,thumbnail_url,timestamp,children{media_url,media_type,thumbnail_url},like_count,comments_count}`,
  );

  const data = await res.json();

  console.log(data);

  return (
    <div style="padding:1rem">
      <div class={componentStyles}>
        {data.media.data.map((media: any) => (
          <InstagramFeedItem media={media} />
        ))}
      </div>
      <hr/>
      <pre style="font-size:11px;overflow-x:auto;">{JSON.stringify(data,null,"  ")}</pre>
    </div>
  );
}

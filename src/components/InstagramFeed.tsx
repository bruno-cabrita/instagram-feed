import { css } from "hono/css";
import InstagramFeedItem from "./InstagramFeedItem.tsx";
import { InstagramAPIResponse } from "../types.ts";

const componentStyles = css`
  --gap: 1rem;
  --roundness: 13px;

  container-type: inline-size;

  .holder {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap);
  }

  @container ( 540px <= width < 768px ) {
    .holder { 
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @container ( 768px <= width < 1280px ) {
    .holder { 
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @container (1280px <= width) {
    .holder { 
      grid-template-columns: repeat(6, 1fr);
    }
  }
`;

type Props = {
  accessToken: string;
};

export default async function ({ accessToken }: Props) {
  const mediaLimit = 12;

  // https://developers.facebook.com/docs/instagram-platform/reference/instagram-media
  const res = await fetch(
    `https://graph.instagram.com/me?access_token=${accessToken}&fields=username,account_type,website,name,followers_count,media_count,biography,profile_picture_url,media.limit(${mediaLimit}){caption,media_type,media_product_type,media_url,permalink,thumbnail_url,timestamp,children{media_url,media_type,thumbnail_url},like_count,comments_count}`,
  );

  if(!res.ok){
    console.error(await res.json())
    return "Error fetching data.";
  }

  const data: InstagramAPIResponse = await res.json();

  // console.log(data);

  return (
    <div class={componentStyles}>
      <div class="holder">
        {data.media.data.map((media) => (
          <InstagramFeedItem media={media} />
        ))}
      </div>
    </div>
  );
}

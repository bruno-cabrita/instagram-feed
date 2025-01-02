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
    display: block;
    position: relative;
    background-color: whitesmoke;
    overflow: hidden;
    border-radius: var(--roundness);
    aspect-ratio: 1;
    color: white;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: background-color ease-out 0.2s;

      &:hover  {
        background-color: rgba(0,0,0,0.5);

        .details {
          opacity: 1;
        }
      }
    }

    .type-icon {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.5rem;
    }

    .details {
      transition: opacity ease-out 0.1s;
      opacity: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;

      .details-item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        font-size: 1.125em;
        font-weight: bold;

        span {
          display: block;
          margin-bottom: -4px;
        }
      }
    }
    `;
    
    const icon = {
    IMAGE: (<></>),
    CAROUSEL_ALBUM: (<svg fill="currentColor" width="20" height="20" viewBox="0 0 48 48"><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"/></svg>),
    VIDEO: (<svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24"><path d="m12.823 1 2.974 5.002h-5.58l-2.65-4.971c.206-.013.419-.022.642-.027L8.55 1Zm2.327 0h.298c3.06 0 4.468.754 5.64 1.887a6.007 6.007 0 0 1 1.596 2.82l.07.295h-4.629L15.15 1Zm-9.667.377L7.95 6.002H1.244a6.01 6.01 0 0 1 3.942-4.53Zm9.735 12.834-4.545-2.624a.909.909 0 0 0-1.356.668l-.008.12v5.248a.91.91 0 0 0 1.255.84l.109-.053 4.545-2.624a.909.909 0 0 0 .1-1.507l-.1-.068-4.545-2.624Zm-14.2-6.209h21.964l.015.36.003.189v6.899c0 3.061-.755 4.469-1.888 5.64-1.151 1.114-2.5 1.856-5.33 1.909l-.334.003H8.551c-3.06 0-4.467-.755-5.64-1.889-1.114-1.15-1.854-2.498-1.908-5.33L1 15.45V8.551l.003-.189Z" fill-rule="evenodd"/></svg>),
    LIKE: (<svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074"/></svg>),
    COMMENT: (<svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M5.821 4.91c3.898-2.765 9.469-2.539 13.073.536c3.667 3.127 4.168 8.238 1.152 11.897c-2.842 3.447-7.965 4.583-12.231 2.805l-.232-.101l-4.375.931l-.075.013l-.11.009l-.113-.004l-.044-.005l-.11-.02l-.105-.034l-.1-.044l-.076-.042l-.108-.077l-.081-.074l-.073-.083l-.053-.075l-.065-.115l-.042-.106l-.031-.113l-.013-.075l-.009-.11l.004-.113l.005-.044l.02-.11l.022-.072l1.15-3.451l-.022-.036C.969 12.45 1.97 7.805 5.59 5.079l.23-.168z"/></svg>),
  }

  return (
    <a class={componentStyles} href={media.permalink} target="_blank" referrerpolicy="no-referrer">
      <img src={media.media_url}/>
      <div class="overlay">
        <div class="type-icon">
          {icon[media.media_type]}
        </div>
        <div class="details">
          {media.like_count > 0 && (<div class="details-item">{icon.LIKE} <span>{media.like_count}</span></div>)}
          {media.comments_count > 0 && (<div class="details-item">{icon.COMMENT} <span>{media.comments_count}</span></div>)}
        </div>
      </div>
    </a>
  );
}

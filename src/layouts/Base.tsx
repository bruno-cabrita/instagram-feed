import { Style } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import { css } from "hono/css";

const bodyStyles = css`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`;

export default function ({ children }: PropsWithChildren) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Instagram Feed</title>
        <Style />
      </head>
      <body class={bodyStyles}>
        {children}
      </body>
    </html>
  );
}

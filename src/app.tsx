import { Hono } from "hono";
import { env } from "hono/adapter";
import BaseLayout from "./layouts/Base.tsx";
import InstagramFeed from "./components/InstagramFeed.tsx";

const app = new Hono();

app.get("/", (c) => {
  const { INSTAGRAM_ACCESS_TOKEN } = env<{ INSTAGRAM_ACCESS_TOKEN: string }>(c);

  return c.html(
    <BaseLayout>
      <InstagramFeed accessToken={INSTAGRAM_ACCESS_TOKEN} />
    </BaseLayout>,
  );
});

export default app;

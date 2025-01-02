import { Hono } from "hono";
import { env } from "hono/adapter";
import BaseLayout from "./layouts/Base.tsx";
import InstagramFeed from "./components/InstagramFeed.tsx";

const app = new Hono();

app.get("/", (c) => {
  const { INSTAGRAM_ACCESS_TOKEN } = env<{ INSTAGRAM_ACCESS_TOKEN: string }>(c);

  return c.html(
    <BaseLayout>
      <div style="padding: 1rem;">
        <InstagramFeed accessToken={INSTAGRAM_ACCESS_TOKEN} />
      </div>
    </BaseLayout>,
  );
});

export default app;

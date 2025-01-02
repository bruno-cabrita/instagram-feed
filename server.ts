import app from "./src/app.tsx";
import "dotenv/load";

Deno.serve(app.fetch);

import { serve } from "https://deno.land/std@0.195.0/http/server.ts";
import manifest from "./_app/manifest.js";
import { App } from "./_app/app.js";

const PORT = 8000;
console.log(`🚀 Running SvelteKit (Deno) on http://localhost:${PORT}`);

await serve((req) => {
  return App.render(req, manifest);
}, { port: PORT });

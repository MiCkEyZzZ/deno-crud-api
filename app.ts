import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import logger from "https://deno.land/x/oak_logger@1.0.0/mod.ts";
import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";

import router from "./routes.ts";
import notFound from "./middlewares/notFound.ts";

const app = new Application();

const port = 4000;

app.use(logger.logger);
app.use(logger.responseTime);

app.use(router.routes());
app.use(router.allowedMethods());

app.use(notFound);

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;

  console.log(
    `
          🚀 ${yellow("Rest")} ${green(url)}
      `,
  );
});

await app.listen({ port });

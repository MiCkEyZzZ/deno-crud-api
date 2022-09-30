import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import logger from "https://deno.land/x/oak_logger@1.0.0/mod.ts";

import { APP_HOST, APP_PORT } from "./config.ts";
import router from "./routes.ts";

// import { DB } from "./db/Database.ts";

const app = new Application();

const port = APP_PORT || "4000";
const hostname = APP_HOST || "localhost";

app.use(logger.logger);
app.use(logger.responseTime);

app.use(router.routes());
app.use(router.allowedMethods());

// await new DB().initModels();

console.log(
  `
        🚀 Rest     http://localhost:${port}/api
    `,
);

await app.listen(`${hostname}:${port}`);

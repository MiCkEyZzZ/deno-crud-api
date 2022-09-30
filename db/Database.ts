import { Database } from "https://deno.land/x/denodb@v1.0.40/mod.ts";

import { Character } from "../models/character.model.ts";

export class DB {
  public client: Database;

  constructor() {
    this.client = new Database("sqlite3", {
      filepath: Deno.realPathSync("./db/database/db.sqlite"),
    });
  }

  async initModels() {
    this.client.link([Character]);
    await this.client.sync({ drop: true });
  }
}

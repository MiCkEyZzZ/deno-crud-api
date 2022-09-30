import { DATA_TYPES, Model } from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import { nanoid } from "https://deno.land/x/nanoid@v3.0.0/mod.ts";

export class Character extends Model {
  static table = "characters";
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      type: DATA_TYPES.STRING,
    },
    name: {
      type: DATA_TYPES.STRING,
    },
    species: {
      type: DATA_TYPES.STRING,
    },
    type: {
      type: DATA_TYPES.STRING,
    },
    occupation: {
      type: DATA_TYPES.STRING,
    },
    status: {
      type: DATA_TYPES.STRING,
    },
    gender: {
      type: DATA_TYPES.STRING,
    },
    affiliation: {
      type: DATA_TYPES.STRING,
    },
    createdAt: {
      type: DATA_TYPES.DATE,
    },
  };

  static default = {
    id: nanoid(),
  };
}

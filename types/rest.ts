import { Request, Response } from "https://deno.land/x/oak@v11.1.0/mod.ts";

export type RestType = {
  params: { id: string };
  request: Request;
  response: Response;
};

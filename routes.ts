import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import characterControllers from "./controllers/character.controllers.ts";

const router = new Router();

router
  .post("/character", characterControllers.createCharacter)
  .get("/character", characterControllers.getCharacters)
  .get("/character/:id", characterControllers.getCharacter)
  .put("/character/:id", characterControllers.updateCharacter)
  .delete("/character/:id", characterControllers.deleteCharacter);

export default router;

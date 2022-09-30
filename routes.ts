import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import CharacterControllers from "./controller/character.controllers.ts";

const router = new Router();

router
  .get("/character", CharacterControllers.getCharacters)
  .get("/character/:id", CharacterControllers.getCharacter)
  .post("/character", CharacterControllers.createCharacter)
  .put("/character/:id", CharacterControllers.updateCharacter)
  .delete("/character/:id", CharacterControllers.deleteCharacter);

export default router;

import { RestType } from "../types/rest.ts";

export interface ICharacterController {
  createCharacter({ request, response }: RestType): void;

  getCharacters({ request, response }: RestType): void;

  getCharacter({ request, response }: RestType): void;

  updateCharacter({ request, response }: RestType): void;

  deleteCharacter({ request, response }: RestType): void;
}

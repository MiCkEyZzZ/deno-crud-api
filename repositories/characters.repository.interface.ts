import { ICharacter } from "../types/character.ts";

export interface ICharacterRepository {
  createCharacter: () => Promise<void>;
  getCharacters: () => Promise<ICharacter[]>;
  getCharacterById: () => Promise<ICharacter>;
  updateCharacter: () => Promise<ICharacter>;
  deleteCharacter: () => void;
}

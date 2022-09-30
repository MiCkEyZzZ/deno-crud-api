import { ICharacter } from "../types/character.ts";

export interface ICharacterService {
  create: () => Promise<void>;
  getCharacters: () => Promise<ICharacter[]>;
  getCharacter: () => Promise<ICharacter>;
  updateCharacter: () => Promise<ICharacter>;
  deleteCharacter: () => void;
}

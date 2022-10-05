import { Character } from "../types/character.ts";

export interface ICharacterService {
  checkCharacterExistById(id: number): Promise<boolean>;

  createCharacter(name: Character): Promise<void>;

  getCharacters(): Promise<Character[] | []>;

  getCharacter(id: Character): Promise<Character | null>;

  updateCharacterById({ id, name }: Character): Promise<Character | null>;

  deleteCharacter(id: Character): Promise<void>;
}

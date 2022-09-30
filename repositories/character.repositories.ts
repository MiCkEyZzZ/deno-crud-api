// deno-lint-ignore-file
import { ICharacter } from "../types/character.ts";
import { ICharacterRepository } from "./characters.repository.interface.ts";

class CharacterRepositories implements ICharacterRepository {
  public async createCharacter(): Promise<void> {}

  public async getCharacters(): Promise<ICharacter[]> {
    return [];
  }

  public async getCharacterById(): Promise<ICharacter> {
    return "";
  }

  public async updateCharacter(): Promise<ICharacter> {
    return {};
  }

  public deleteCharacter(): void {}
}

export default new CharacterRepositories();

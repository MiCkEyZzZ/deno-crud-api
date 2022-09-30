import { ICharacter } from "../types/character.ts";
import { ICharacterService } from "./character.service.interface.ts";

class CharacterServices implements ICharacterService {
  public async create(): Promise<void> {}

  // deno-lint-ignore require-await
  public async getCharacters(): Promise<ICharacter[]> {
    return "";
  }

  // deno-lint-ignore require-await
  public async getCharacter(): Promise<ICharacter> {
    return "";
  }

  // deno-lint-ignore require-await
  public async updateCharacter(): Promise<ICharacter> {
    return "";
  }

  public deleteCharacter(): void {
    return "";
  }
}

export default new CharacterServices();

import { ICharacterService } from "../interfaces/character.service.interface.ts";
import { Character } from "../types/character.ts";
import CharacterRepositories from "../repositories/character.repositories.ts";

class CharacterServices implements ICharacterService {
  public checkCharacterExistById(id: number): Promise<boolean> {
    return CharacterRepositories.check(id);
  }

  public createCharacter(name: Character): Promise<void> {
    return CharacterRepositories.create(name);
  }

  public getCharacters(): Promise<Character[] | []> {
    return CharacterRepositories.getAll();
  }

  public getCharacter(id: Character): Promise<Character | null> {
    return CharacterRepositories.getSingle(id);
  }

  public updateCharacterById(
    { id, name }: Character,
  ): Promise<Character | null> {
    return CharacterRepositories.updateSingle({ id, name });
  }

  public deleteCharacter(id: Character): Promise<void> {
    return CharacterRepositories.deleteSingle(id);
  }
}

export default new CharacterServices();

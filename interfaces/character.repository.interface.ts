import { Character } from "../types/character.ts";

export interface ICharacterRepository {
  check(id: number): Promise<boolean>;

  create(name: Character): Promise<void>;

  getAll(): Promise<Character[] | []>;

  getSingle(id: Character): Promise<Character | null>;

  updateSingle({ id, name }: Character): Promise<Character | null>;

  deleteSingle(id: Character): Promise<void>;
}

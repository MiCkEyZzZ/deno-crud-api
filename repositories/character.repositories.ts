import client from "../database/db.ts";
import { TABLE } from "../config.ts";
import { Character } from "../types/character.ts";
import { ICharacterRepository } from "../interfaces/character.repository.interface.ts";

class CharacterRepositories implements ICharacterRepository {
  /**
   * Проверка на существование персонажа
   * @param id
   * @returns целое число
   */
  public async check(id: number): Promise<boolean> {
    const [result] = await client.query(
      `SELECT COUNT(*) count FROM ${TABLE.CHARACTERS} WHERE id = ? LIMIT 1`,
      [id],
    );

    return result.count > 0;
  }

  /**
   * Создание ожного персонажа
   * @param name
   * @returns целое число
   */
  public async create(name: Character): Promise<void> {
    return await client.query(
      `INSERT INTO ${TABLE.CHARACTERS}(name) values(?)`,
      [
        name,
      ],
    );
  }

  /**
   * Получение всех существующих персонажей
   * @returns целое число
   */
  public async getAll(): Promise<Character[] | []> {
    return await client.query(`SELECT * FROM ${TABLE.CHARACTERS}`);
  }

  /**
   * Получение одного персонажа
   * @param id
   * @returns целое число
   */
  public async getSingle(id: Character): Promise<Character | null> {
    return await client.query(
      `SELECT * FROM ${TABLE.CHARACTERS} WHERE id = ?`,
      [id],
    );
  }

  /**
   * Обновление содержимого одного персонажа
   * @param { id, name }
   * @returns целое число
   */
  public async updateSingle(
    { id, name }: Character,
  ): Promise<Character | null> {
    const result = await client.query(
      `UPDATE ${TABLE.CHARACTERS} SET name = ?, WHERE id = ?`,
      [
        name,
        id,
      ],
    );

    return result.affectedRows;
  }

  /**
   * Удаление одного персонажа
   * @param id
   * @returns целое число
   */
  public async deleteSingle(id: Character): Promise<void> {
    const result = await client.query(
      `DELETE FROM ${TABLE.CHARACTERS} WHERE id = ?`,
      [id],
    );

    return result.affectedRows;
  }
}

export default new CharacterRepositories();

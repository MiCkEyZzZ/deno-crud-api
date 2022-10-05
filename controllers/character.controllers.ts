import { ICharacterController } from "../interfaces/character.controller.interface.ts";
import { RestType } from "../types/rest.ts";
import CharacterServices from "../services/character.services.ts";

class CharacterControllers implements ICharacterController {
  public async createCharacter({ request, response }: RestType): Promise<void> {
    const body = await request.body().value;

    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        message: "Данные не были переданы.",
      };

      return;
    }

    try {
      const name = body.name;
      await CharacterServices.createCharacter(name);
      response.status = 201;
      response.body = {
        success: true,
        message: "Персонаж успешно создан.",
      };
    } catch (error) {
      response.status = 400,
        response.body = {
          success: false,
          message: `Error: ${error}`,
        };
    }
  }

  public async getCharacters({ response }: RestType): Promise<void> {
    try {
      const characters = await CharacterServices.getCharacters();
      response.status = 200;
      response.body = {
        success: true,
        characters,
      };
    } catch (error) {
      response.status = 400,
        response.body = {
          success: false,
          message: `Error: ${error}`,
        };
    }
  }

  public async getCharacter({ params, response }: RestType): Promise<void> {
    try {
      const id = Number(params.id);
      const isAvailable = await CharacterServices.checkCharacterExistById(id);

      if (!isAvailable) {
        response.status = 404;
        response.body = {
          success: false,
          message: `Персонаж не найден.`,
        };

        return;
      }

      const character = await CharacterServices.getCharacter(id);

      response.status = 200;
      response.body = {
        success: true,
        data: character,
      };
    } catch (error) {
      response.status = 400,
        response.body = {
          success: false,
          message: `Error: ${error}`,
        };
    }
  }

  public async updateCharacter(
    { params, request, response }: RestType,
  ): Promise<void> {
    try {
      const id = Number(params.id);
      const isAvailable = await CharacterServices.checkCharacterExistById(id);

      if (!isAvailable) {
        response.status = 404;
        response.body = {
          success: false,
          message: `Персонаж не найден.`,
        };

        return;
      }

      const body = await request.body().value;
      const updatedCharacter = await CharacterServices.updateCharacterById({
        id,
        ...body,
      });

      response.status = 200;
      response.body = {
        success: true,
        message: `Персонаж ${updatedCharacter} успешно обновлён.`,
      };
    } catch (error) {
      response.status = 400;
      response.body = {
        success: false,
        message: `Error: ${error}`,
      };
    }
  }

  public async deleteCharacter({ params, response }: RestType): Promise<void> {
    try {
      const id = Number(params.id);
      const isAvailable = await CharacterServices.checkCharacterExistById(id);

      if (!isAvailable) {
        response.status = 404;
        response.body = {
          success: false,
          message: `Персонаж не найден.`,
        };

        return;
      }

      const character = await CharacterServices.deleteCharacter(id);
      response.body = {
        success: true,
        message: `Персонаж ${character} успешно удалён.`,
      };
    } catch (error) {
      response.status = 400;
      response.body = {
        success: false,
        message: `Error: ${error}`,
      };
    }
  }
}

export default new CharacterControllers();

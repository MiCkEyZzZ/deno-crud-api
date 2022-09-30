import { ICharacterController } from "./character.controller.interface.ts";

class CharacterControllers implements ICharacterController {
  public createCharacter(
    { request, response }: { request: any; response: any },
  ) {
    if (!request.hasBody) {
      response.status = 400;
      response.body = { message: `Некорректные переданные данные.` };

      return;
    }

    const { data } = request.body();

    console.log(data);
  }

  public getCharacters(
    { response }: { response: any },
  ) {
    const { data } = response.body();

    console.log(data);
  }

  public getCharacter(
    { params, response }: { params: any; response: any },
  ) {
    const characterId = params.id;

    if (!characterId) {
      response.status = 400;
      response.body = {
        message: `Некорректный переданный идентификатор ${characterId}.`,
      };

      return;
    }

    console.log(characterId);
  }

  public updateCharacter(
    { params, response }: { params: any; response: any },
  ) {
    const characterId = params.id;

    if (!characterId) {
      response.status = 400;
      response.body = {
        message: `Некорректный переданный идентификатор ${characterId}.`,
      };

      return;
    }

    console.log(characterId);
  }

  public deleteCharacter(
    { params, response }: { params: any; response: any },
  ) {
    const characterId = params.id;

    if (!characterId) {
      response.status = 400;
      response.body = {
        message: `Некорректный переданный идентификатор ${characterId}.`,
      };

      return;
    }

    console.log(characterId);
  }
}

export default new CharacterControllers();

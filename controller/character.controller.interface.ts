export interface ICharacterController {
  createCharacter: (request: any, response: any) => void;
  getCharacters: (request: any, response: any) => void;
  getCharacter: (request: any, response: any) => void;
  updateCharacter: (request: any, response: any) => void;
  deleteCharacter: (request: any, response: any) => void;
}

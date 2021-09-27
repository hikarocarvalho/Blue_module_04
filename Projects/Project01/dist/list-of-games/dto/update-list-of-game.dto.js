"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateListOfGameDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_list_of_game_dto_1 = require("./create-list-of-game.dto");
class UpdateListOfGameDto extends (0, mapped_types_1.PartialType)(create_list_of_game_dto_1.CreateListOfGameDto) {
}
exports.UpdateListOfGameDto = UpdateListOfGameDto;
//# sourceMappingURL=update-list-of-game.dto.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOfGamesController = void 0;
const common_1 = require("@nestjs/common");
const list_of_games_service_1 = require("./list-of-games.service");
const create_list_of_game_dto_1 = require("./dto/create-list-of-game.dto");
const update_list_of_game_dto_1 = require("./dto/update-list-of-game.dto");
const user_entity_1 = require("../users/entities/user.entity");
const currentUser_decorator_1 = require("../decorators/currentUser.decorator");
let ListOfGamesController = class ListOfGamesController {
    constructor(listOfGamesService) {
        this.listOfGamesService = listOfGamesService;
    }
    create(createListOfGameDto) {
        return this.listOfGamesService.create(createListOfGameDto);
    }
    findAll(currentUser) {
        return this.listOfGamesService.findAll(currentUser.id);
    }
    findOne(id) {
        return this.listOfGamesService.findOne(id);
    }
    update(id, updateListOfGameDto) {
        return this.listOfGamesService.update(id, updateListOfGameDto);
    }
    remove(id) {
        return this.listOfGamesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_list_of_game_dto_1.CreateListOfGameDto]),
    __metadata("design:returntype", void 0)
], ListOfGamesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], ListOfGamesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ListOfGamesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_list_of_game_dto_1.UpdateListOfGameDto]),
    __metadata("design:returntype", void 0)
], ListOfGamesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ListOfGamesController.prototype, "remove", null);
ListOfGamesController = __decorate([
    (0, common_1.Controller)('list-of-games'),
    __metadata("design:paramtypes", [list_of_games_service_1.ListOfGamesService])
], ListOfGamesController);
exports.ListOfGamesController = ListOfGamesController;
//# sourceMappingURL=list-of-games.controller.js.map
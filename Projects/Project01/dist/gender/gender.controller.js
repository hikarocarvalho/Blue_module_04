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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenderController = void 0;
const common_1 = require("@nestjs/common");
const genre_service_1 = require("./genre.service");
const create_genre_dto_1 = require("./dto/create-genre.dto");
const update_genre_dto_1 = require("./dto/update-genre.dto");
let GenderController = class GenderController {
    constructor(genreService) {
        this.genreService = genreService;
    }
    create(createGenderDto) {
        return this.genreService.create(createGenderDto);
    }
    findAll() {
        return this.genreService.findAll();
    }
    findOne(id) {
        return this.genreService.findOne(id);
    }
    update(id, updateGenreDto) {
        return this.genreService.update(id, updateGenreDto);
    }
    remove(id) {
        return this.genreService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_genre_dto_1.CreateGenreDto]),
    __metadata("design:returntype", void 0)
], GenderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GenderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GenderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_a = typeof update_genre_dto_1.UpdateGenreDto !== "undefined" && update_genre_dto_1.UpdateGenreDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], GenderController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GenderController.prototype, "remove", null);
GenderController = __decorate([
    (0, common_1.Controller)('gender'),
    __metadata("design:paramtypes", [typeof (_b = typeof genre_service_1.GenreService !== "undefined" && genre_service_1.GenreService) === "function" ? _b : Object])
], GenderController);
exports.GenderController = GenderController;
//# sourceMappingURL=gender.controller.js.map
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
exports.GenderController = void 0;
const common_1 = require("@nestjs/common");
const gender_service_1 = require("./gender.service");
const create_gender_dto_1 = require("./dto/create-gender.dto");
const update_gender_dto_1 = require("./dto/update-gender.dto");
let GenderController = class GenderController {
    constructor(genderService) {
        this.genderService = genderService;
    }
    create(createGenderDto) {
        return this.genderService.create(createGenderDto);
    }
    findAll() {
        return this.genderService.findAll();
    }
    findOne(id) {
        return this.genderService.findOne(+id);
    }
    update(id, updateGenderDto) {
        return this.genderService.update(+id, updateGenderDto);
    }
    remove(id) {
        return this.genderService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gender_dto_1.CreateGenderDto]),
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
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gender_dto_1.UpdateGenderDto]),
    __metadata("design:returntype", void 0)
], GenderController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenderController.prototype, "remove", null);
GenderController = __decorate([
    (0, common_1.Controller)('gender'),
    __metadata("design:paramtypes", [gender_service_1.GenderService])
], GenderController);
exports.GenderController = GenderController;
//# sourceMappingURL=gender.controller.js.map
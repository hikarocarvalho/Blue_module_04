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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GenderService = class GenderService {
    constructor(prisma) {
        this.prisma = prisma;
        this._include = {
            game: {
                select: {
                    game: true,
                }
            }
        };
    }
    create(data) {
        return this.prisma.genre.create({
            include: this._include,
            data,
        });
    }
    findAll() {
        return this.prisma.genre.findMany();
    }
    findOne(id) {
        return this.prisma.genre.findUnique({
            where: { id },
            include: this._include,
        });
    }
    update(id, data) {
        return this.prisma.genre.update({
            where: { id },
            data,
            include: this._include,
        });
    }
    remove(id) {
        return this.prisma.genre.delete({
            where: { id },
        });
    }
};
GenderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GenderService);
exports.GenderService = GenderService;
//# sourceMappingURL=gender.service.js.map
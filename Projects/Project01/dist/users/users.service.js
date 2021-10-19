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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
        this._include = {
            games: {
                select: {
                    game: true
                }
            },
            Perfil: {
                select: {
                    title: true,
                    image: true,
                }
            },
        };
    }
    create(dto) {
        const data = Object.assign(Object.assign({}, dto), { games: {
                create: dto.games
            }, Perfil: {
                create: dto.Perfil
            } });
        return this.prisma.users.create({
            data,
        });
    }
    findAll() {
        return this.prisma.users.findMany({
            include: this._include
        });
    }
    findOne(id) {
        return this.prisma.users.findUnique({
            where: { id },
            include: this._include
        });
    }
    update(id, data) {
        return this.prisma.users.update({
            where: { id },
            data,
            include: this._include
        });
    }
    remove(id) {
        return this.prisma.users.delete({
            where: { id },
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
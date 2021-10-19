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
exports.ListOfGamesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ListOfGamesService = class ListOfGamesService {
    constructor(prisma) {
        this.prisma = prisma;
        this._include = {
            game: {
                select: {
                    id: true,
                    title: true,
                    folder: true,
                    description: true,
                    year: true,
                    score: true,
                    youtubeUrl: true,
                    gamePlayUrl: true,
                    genre: {
                        select: {
                            genre: {
                                select: {
                                    name: true,
                                }
                            }
                        }
                    },
                }
            }
        };
    }
    create(data) {
        return this.prisma.listOfGames.create({
            data,
        });
    }
    findAll(id) {
        return this.prisma.listOfGames.findMany({
            where: { userId: id },
            include: this._include,
        });
    }
    findOne(id) {
        return this.prisma.listOfGames.findUnique({
            where: { id },
        });
    }
    update(id, data) {
        return this.prisma.listOfGames.update({
            where: { id },
            data,
        });
    }
    remove(id) {
        return this.prisma.listOfGames.delete({
            where: { id },
        });
    }
};
ListOfGamesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ListOfGamesService);
exports.ListOfGamesService = ListOfGamesService;
//# sourceMappingURL=list-of-games.service.js.map
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { getNameOfJSDocTypedef } from 'typescript';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService : GamesService){};

    @Get()
    getAllGames(){
        return this.gamesService.findAll();
    }
    @Get(':id')
    getGameById(@Param() params){
        return this.gamesService.findeById(+params.id);
    }
    @Post()
    createGame(@Body gameDto:GameDto){
        
    }
    @Put(':id')
    updateGame(){

    }
    @Delete(':id')
    deleteGame(){

    }
}

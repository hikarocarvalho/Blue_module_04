import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenderController {
    private readonly genreService;
    constructor(genreService: GenreService);
    create(createGenderDto: CreateGenreDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateGenreDto: UpdateGenreDto): any;
    remove(id: number): any;
}

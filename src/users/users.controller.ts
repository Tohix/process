import {Body, Controller, Get, HttpStatus, Param, Post, SetMetadata, UseGuards, UseInterceptors} from "@nestjs/common";
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {IUser} from "../interfaces/user";
import {ValidationPipe} from "../pipes/validation.pipe";
import {ParseIntPipe} from "../pipes/parse-int.pipe";
import {RolesGuard} from "../guards/roles.guard";
import {LoggingInterceptor} from "../interceptors/logging.interceptor";
import {TransformInterceptor} from "../interceptors/transform.interceptor";
import {CacheInterceptor} from "../interceptors/cache.interceptor";

@Controller('users')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @SetMetadata('roles', ['admin'])
    @Get()
    findAll(): IUser[] {
        console.log(33333);
        return this.usersService.findAll();
    }

    @Get(":id")
    // @UseInterceptors(CacheInterceptor)
    findOne(
        @Param('id', new ParseIntPipe()) id: number): IUser[] {
        return this.usersService.findAll();
    }

    @Post()
    // @UsePipes(new JoiValidationPipe(createUserSchema))
    create(@Body(new ValidationPipe()) body: CreateUserDto) {
        // this.usersService.create(body);
        return 'User was successfully created';
    }

}

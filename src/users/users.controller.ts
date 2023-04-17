import {Body, Controller, Get, Post} from "@nestjs/common";
import {CreateUserDto} from "./create-user.dto";
import {UsersService} from "./users.service";
import {IUser} from "../interfaces/user";
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @Get()
    findAll(): IUser[] {
        return this.usersService.findAll();
    }

    @Post()
    create(@Body() body: CreateUserDto) {
        this.usersService.create(body);
        return 'User was successfully created';
    }

}

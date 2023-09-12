import {Controller, Get, HttpException, HttpStatus, Param} from '@nestjs/common';
import { AppService } from './app.service';
import {UsersService} from "./users/users.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UsersService) {}

  @Get()
  getHello(): string {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return this.appService.getHello();
  }
}

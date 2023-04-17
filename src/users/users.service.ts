import { Injectable } from '@nestjs/common';
import {IUser} from "../interfaces/user";

@Injectable()
export class UsersService {
    private readonly users: IUser[] = [];

    create(user: IUser): void {
        this.users.push(user);
    }

    findAll(): IUser[] {
        return this.users;
    }
}

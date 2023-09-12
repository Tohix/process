import { Injectable } from '@nestjs/common';
import {IUser} from "../interfaces/user";

@Injectable()
export class UsersService {
    private readonly users: IUser[] = [
        {
            userId: 1,
            username: 'anton',
            password: '1111',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];


    async findOne(username: string): Promise<IUser | undefined> {
        return this.users.find(user => user.username === username);
    }

    create(user: IUser): void {
        this.users.push(user);
    }

    findAll(): IUser[] {
        return this.users;
    }
}

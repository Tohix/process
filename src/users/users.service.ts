import { Injectable } from '@nestjs/common';
import {IUser} from "../interfaces/user";

@Injectable()
export class UsersService {
    private readonly users: IUser[] = [
        {
            id: 1,
            name: 'anton',
            email: 'test@gmail.com',
        },
        {
            id: 2,
            name: 'maria',
            email: 'test1@gmail.com',
        },
    ];


    async findOne(id: number): Promise<IUser | undefined> {
        return this.users.find(user => user.id === id);
    }

    create(user: IUser): void {
        this.users.push(user);
    }

    findAll(): IUser[] {
        return this.users;
    }
}

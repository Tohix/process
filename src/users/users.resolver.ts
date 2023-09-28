import {Args, Field, InputType, Mutation, Parent, Query, ResolveField, Resolver} from "@nestjs/graphql";
import {UsersService} from "./users.service";
import {IUser} from "../interfaces/user";

@Resolver('User')
export class UsersResolver {
    constructor(private userService: UsersService) {

    }

    @Query('user')
    async getUser(@Args('id') id: number) {
        return this.userService.findOne(id)
    }

    @Mutation('updateUser')
    async updateUser(@Args('id') id: number,) {
        this.userService.create({id, email: "test@email.com", name: "test"});
    }

    @ResolveField('posts')
    async getPosts(@Parent() user: IUser) {
        const {id} = user;
        console.log(id);
        return [];
    }
}


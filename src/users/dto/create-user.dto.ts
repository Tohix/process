import * as Joi from "joi";
import {IsString} from "class-validator";

export const createUserSchema = Joi.object({
    email: Joi.string().required(),
    name: Joi.string().required(),
})

export class CreateUserDto {
    @IsString()
    email: string;

    @IsString()
    name: string;
}

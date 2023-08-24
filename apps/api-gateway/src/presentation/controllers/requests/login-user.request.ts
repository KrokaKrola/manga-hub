import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserRequest {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}

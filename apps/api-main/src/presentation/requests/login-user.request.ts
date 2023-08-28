import { IsNotEmpty } from 'class-validator';

export class LoginUserRequest {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}

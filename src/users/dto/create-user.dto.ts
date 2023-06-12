import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: "user@mail.ru", description: "Почтовый адрес" })
    @IsString({ message: "Поле должно быть строкой" })
    @IsEmail({}, { message: "Неккоректный email" })
    readonly email: string;

    @ApiProperty({ example: "12345", description: "Пароль" })
    @IsString({ message: "Поле должно быть строкой" })
    @Length(4, 16, {
        message: "Пароль не должен быть меньше 4 и больше 16 символов",
    })
    readonly password: string;
}

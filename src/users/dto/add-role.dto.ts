import { IsString, IsNumber } from "class-validator";
export class AddRoleDto {
    @IsString({ message: "Поле должно быть строкой" })
    readonly value: string;

    @IsNumber({}, { message: "Поле должно быть числовым значением" })
    readonly userId: number;
}

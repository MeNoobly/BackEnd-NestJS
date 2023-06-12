import { ApiProperty } from "@nestjs/swagger";
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
} from "sequelize-typescript";
import { UsersRoles } from "src/users/users-roles.model";
import { User } from "src/users/users.model";

interface IRoleCreationAttributes {
    value: string;
    description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, IRoleCreationAttributes> {
    @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({
        example: "ADMIN",
        description: "Значение роли пользователя",
    })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    value: string;

    @ApiProperty({
        example: "Администратор",
        description: "Описание роли пользователя",
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @BelongsToMany(() => User, () => UsersRoles)
    users: User[];
}

import { SetMetadata, applyDecorators } from "@nestjs/common";

export const ROLES_KEY = "roles";

export const Roles = (...roles: string[]) => {
    return applyDecorators(SetMetadata(ROLES_KEY, roles));
};

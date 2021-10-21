import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "src/users/entities/user.entity";
import { AuthRequest } from "src/auth/model/AuthRequest";

export const CurrentUser = createParamDecorator(
    (data: unknown, context:ExecutionContext):User =>{
        const request = context.switchToHttp().getRequest<AuthRequest>();
        return request.principal;
    },
);
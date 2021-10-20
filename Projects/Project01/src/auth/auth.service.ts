import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './model/LoginDto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService : UsersService,
        private readonly jwtService : JwtService,
    ){}
    async login(dto: LoginDto) {
        const user: User = await this.validateUser(dto.email,dto.password);
    }
    async validateUser(email: string, password: string): Promise<User> {
        const user: User = await this.usersService.findByEmail(email);
        if (user){
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid){
                return {
                    ...user,
                    password
                }
            }
        }
        throw new Error('Email or password Incorrect');
    }
}

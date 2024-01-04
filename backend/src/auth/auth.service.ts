import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
import { WRONG_CRED_ERROR } from './auth.constants';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException(WRONG_CRED_ERROR);
    }
    const isCorrectPassword = await compare(password, user.password);
    if (!isCorrectPassword) {
      throw new UnauthorizedException(WRONG_CRED_ERROR);
    }
    delete user.password;
    return { ...user };
  }

  async login(dto: Omit<User, 'password'>): Promise<{ access_token: string }> {
    const access_token = await this.jwtService.signAsync(dto);
    return {
      access_token,
    };
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { hash } from 'bcrypt';
import * as process from 'process';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
      include: {
        posts: true,
      },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  async create(dto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const salt = Number(this.configService.get('SALTORROUNDS'));
    const password = await hash(dto.password, salt);
    const user = await this.prisma.user.create({
      data: {
        ...dto,
        password,
      },
    });
    delete user.password;
    return user;
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    const currentDate = new Date().toISOString();
    const password = dto.password
      ? await hash(dto.password, Number(this.configService.get('SALTORROUNDS')))
      : undefined;
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...dto,
        password,
        updatedAt: currentDate,
      },
    });
  }

  async remove(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}

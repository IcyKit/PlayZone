import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { hash } from 'bcrypt';
import * as process from 'process';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

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

  //@ts-ignore
  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = Number(process.env.SALTORROUNDS);
    const password = await hash(createUserDto.password, salt);
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password,
      },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const currentDate = new Date().toISOString();
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...updateUserDto,
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

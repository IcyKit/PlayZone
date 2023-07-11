import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from '@prisma/client';
import { IPost } from './types/Post';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) { }

  findAll(): Promise<IPost[]> {
    //@ts-ignore
    return this.prisma.post.findMany({
      select: {
        id: true,
        title: true,
        body: true,
        attachment: true,
        createdAt: true,
        user: {
          select: {
            username: true,
            avatar: true,
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: string): Promise<Post> {
    return this.prisma.post.findFirst({
      where: {
        id,
      },
    });
  }

  create(createPostDto: CreatePostDto): Promise<Post> {
    return this.prisma.post.create({
      data: createPostDto,
    });
  }

  update(id: string, dto: UpdatePostDto): Promise<Post> {
    const currentDate = new Date().toISOString();
    return this.prisma.post.update({
      where: {
        id,
      },
      data: {
        ...dto,
        updatedAt: currentDate,
      },
    });
  }

  remove(id: string): Promise<Post> {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}

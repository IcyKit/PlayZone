import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
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

  findOne(id: string): Promise<IPost> {
    //@ts-ignore
    return this.prisma.post.findFirst({
      where: {
        id,
      },
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
    });
  }

  create(createPostDto: CreatePostDto): Promise<IPost> {
    //@ts-ignore
    return this.prisma.post.create({
      data: createPostDto,
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
    });
  }

  update(id: string, dto: UpdatePostDto): Promise<IPost> {
    const currentDate = new Date().toISOString();
    //@ts-ignore
    return this.prisma.post.update({
      where: {
        id,
      },
      data: {
        ...dto,
        updatedAt: currentDate,
      },
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
    });
  }

  remove(id: string): Promise<IPost> {
    //@ts-ignore
    return this.prisma.post.delete({
      where: {
        id,
      },
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
    });
  }
}

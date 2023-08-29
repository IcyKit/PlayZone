import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: 'Заголовок',
    default: 'Криминальное Чтиво',
  })
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: 'Текст поста',
    default: 'Дошли руки посмотреть этот шедевр',
  })
  @IsString()
  readonly body: string;

  @ApiProperty({
    description: 'Ссылка на фото',
    default:
      'https://static3.coolconnections.ru/images/1605/standard/hd/8272f42d3d3af5afc17611f0194ea48c337448bb.jpg?1608620633',
  })
  @IsString()
  readonly attachment?: string;

  @ApiProperty({
    description: 'ID автора',
    default: '64b64efc-6cc1-45ae-8e0f-b1c6128918dd',
  })
  @IsString()
  readonly authorId: string;
}

// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'Описание',
  })
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Ссылка на новый аватар',
  })
  @IsString()
  avatarPhoto?: string;
}

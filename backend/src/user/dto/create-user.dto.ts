import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Имя',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Имя пользователя',
  })
  @IsString()
  readonly username: string;

  @ApiProperty({
    description: 'Электронная почта',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description: 'Пароль',
  })
  @IsString()
  readonly password: string;
}

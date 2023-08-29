import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Электронная почта',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Пароль',
  })
  @IsString()
  password: string;
}

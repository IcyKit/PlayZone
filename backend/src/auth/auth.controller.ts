import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  HttpCode,
  BadRequestException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { ALREADY_REGISTERED_ERROR } from './auth.constants';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }

  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: CreateUserDto) {
    const oldUser = await this.userService.findByEmail(dto.email);
    if (oldUser) {
      throw new BadRequestException(ALREADY_REGISTERED_ERROR);
    }
    const user = await this.userService.create(dto);
    return this.authService.login(user);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() { email, password }: LoginDto) {
    const user = await this.authService.validateUser(email, password);
    return this.authService.login(user);
  }
}

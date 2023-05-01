import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(loginDto: LoginDto): Promise<any> {
    const user = await this.userService.findByEmail(loginDto.email);
    const decryptedPass = await compare(loginDto.password, user.password);
    if (user && decryptedPass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}

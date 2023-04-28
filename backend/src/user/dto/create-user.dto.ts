export class CreateUserDto {
  name: string;
  username: string;
  description: string;
  email: string;
  password: string;
  avatarPhoto?: string;
}

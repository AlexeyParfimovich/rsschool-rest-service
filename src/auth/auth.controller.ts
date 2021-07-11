import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from '../resources/users/user.dto';
import { AuthService } from './auth.service';

@ApiTags('Authorization')
@Controller('login')
export class AuthController {

  constructor(private authService: AuthService){};

  @Post()
  login(@Body() dto: UserDto) {
    return this.authService.login(dto);
  };

}

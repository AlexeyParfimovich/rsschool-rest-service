import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { UserDto } from '../resources/users/user.dto';
import { UsersService } from '../resources/users/users.service';

@Injectable()
export class AuthService {

  constructor(private userService: UsersService,
              private jwtService: JwtService){};
  
  async login(dto: UserDto) {
    const user = await this.validateUser(dto);
    return {
      token: this.jwtService.sign({login: user.login, password: user.password})
    };
  };

  private async validateUser(dto: UserDto){
    const user = await this.userService.getByLoginUser(dto.login);
    const isPasswordEquals = await compare(dto.password, user.password);

    if(!isPasswordEquals){
      throw new UnauthorizedException({message: 'Login or password is invalid'});
    }
    return user;
  }

}

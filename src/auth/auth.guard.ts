import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private jwtService: JwtService ){};

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const req = context.switchToHttp().getRequest();

    try {
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if(bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException('Authorization failed: no token provided');
      }

      req.user = await this.jwtService.verifyAsync(token);
      return true;
    } catch(err) {
      throw new UnauthorizedException(`Authorization failed: ${err.message} `);
    }
  };
  
}
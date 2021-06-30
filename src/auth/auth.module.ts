import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../resources/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { JWT_SECRET_KEY } from "../common/config";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: JWT_SECRET_KEY,
      signOptions: {
        expiresIn: '24h',
      }
    }),
  ],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule {}

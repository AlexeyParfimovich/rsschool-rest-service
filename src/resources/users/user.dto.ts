import { ApiProperty } from "@nestjs/swagger";

export class UserDto {

  @ApiProperty({ example: 'James Doe', description: 'user name' })
  readonly name!: string; // User name

  @ApiProperty({ example: 'jamesdoe2021', description: 'user login' })
  readonly login!: string; // User login 
  
  @ApiProperty({ example: 'P@ssw0rd123', description: 'user password' }) 
  readonly password!: string; // User password 
}
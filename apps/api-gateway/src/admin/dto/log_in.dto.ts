import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty({ example: 'test@gmail.com' })
    email: string;
    @ApiProperty({ example: 'test123' })
    password: string;
  }
  
import { IAdmin, Ivisual, Role } from "@libs/interface";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";




export class AdminDto implements IAdmin{
    // _id?: any;
    // createdAt: Date;
    @ApiProperty({ example: 'Mahsa' })
    @IsString()
    name?: string;
    @ApiProperty({ example: 'mahsaroozrokh1993@gmail.com' })
    @IsString()
    email?: string;
    @ApiProperty({ example: 9393861802 })
    @IsNumber()
    phone?: number;
    @ApiProperty({ example: 'mahsa@1234' })
    @IsString()
    password?: string;
    @ApiProperty({ example: 1 })
    @IsEnum(Role)
    role: Role;
   
 

}


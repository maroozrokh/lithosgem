import { IAdmin, IAdminProfile, IUpdateAdmin, IUpdateAdminProfile, Ivisual, Role } from "@libs/interface";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { VisualDto } from "../../blog/dto/add_blog.dto";




export class EditeAdminDto implements IUpdateAdmin{
    @ApiProperty({ example: 'Mahsa' })
    @IsString()
    name?: string;
    @ApiProperty({ example: 'mahsaroozrokh@yahoo.com' })
    @IsString()
    email?: string;
    @ApiProperty({ example: 'Mahsa_@456' })
    @IsString()
    password?: string;
    @ApiProperty({ example: 'Mahsa' })
    @IsEnum(Role)
    role?: Role;
    // profile?: IAdminProfile;
    // _id?: any;
    // createdAt: Date;


   
 

}



export class EditeAdminImageDto implements IUpdateAdminProfile{
    @ApiProperty({ example: 'Mahsa' })
    @IsString()
    name?: string;
    profile?: VisualDto;
    // profile?: IAdminProfile;
    // _id?: any;
    // createdAt: Date;


   
 

}


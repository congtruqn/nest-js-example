import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateAnimalDto {
    
    @ApiProperty()
    @IsNotEmpty()
    name: string;
  
    @ApiProperty()
    @IsNotEmpty()
    register_id: string;

    @ApiProperty()
    @IsNotEmpty()
    enter_date: Date;

    @ApiProperty()
    @IsNotEmpty()
    genetics: string;

    @ApiProperty()
    @IsNotEmpty()
    birthday: Date;

    @ApiProperty()
    @IsNotEmpty()
    litter_id: string;

    @ApiProperty()
    @IsNotEmpty()
    ori_type: string;

    @ApiProperty()
    @IsNotEmpty()
    eid: string;

    @ApiProperty()
    @IsNotEmpty()
    origin: string;

    @ApiProperty()
    @IsNotEmpty()
    initial_parity: string;

    @ApiProperty()
    @IsNotEmpty()
    location: string;

    @ApiProperty()
    @IsNotEmpty()
    sire: string;

    @ApiProperty()
    @IsNotEmpty()
    dam: string;

    @ApiProperty()
    @IsNotEmpty()
    weight: number;

    @ApiProperty()
    @IsNotEmpty()
    price: number;

    @ApiProperty()
    @IsNotEmpty()
    comment: string;

    @ApiProperty()
    @IsNotEmpty()
    status: number;
}
import { IsNotEmpty, IsNumber, IsNumberString } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    description: string = '';

    @IsNumber()
    stock: number = 0;

    image: string = '';
    

}

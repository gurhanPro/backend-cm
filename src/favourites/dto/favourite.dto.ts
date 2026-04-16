import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsNumber } from 'class-validator';

export class FavouriteDto {
  @ApiProperty({
    example: 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
  })
  @IsString()
  @IsUrl()
  imageUrl: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  userId: number;
}

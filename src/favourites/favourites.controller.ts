import { Controller, Get, Post, Delete, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { FavouritesService } from './favourites.service';
import { FavouriteDto } from './dto/favourite.dto';

@ApiTags('Favourites')
@Controller('api/favourites')
export class FavouritesController {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all favourited images for a user' })
  @ApiQuery({ name: 'userId', type: Number })
  getAll(@Query('userId') userId: string) {
    return this.favouritesService.getAll(Number(userId));
  }

  @Post()
  @ApiOperation({ summary: 'Add an image to favourites' })
  add(@Body() dto: FavouriteDto) {
    return this.favouritesService.add(dto.imageUrl, dto.userId);
  }

  @Delete()
  @ApiOperation({ summary: 'Remove an image from favourites' })
  remove(@Body() dto: FavouriteDto) {
    return this.favouritesService.remove(dto.imageUrl, dto.userId);
  }
}

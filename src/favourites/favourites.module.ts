import { Module } from '@nestjs/common';
import { FavouritesController } from './favourites.controller';
import { FavouritesService } from './favourites.service';
import { FavouritesRepository } from './favourites.repository';

@Module({
  controllers: [FavouritesController],
  providers: [FavouritesService, FavouritesRepository],
})
export class FavouritesModule {}

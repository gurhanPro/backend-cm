import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { FavouritesModule } from './favourites/favourites.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, FavouritesModule],
})
export class AppModule {}

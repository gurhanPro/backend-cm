import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { FavouritesRepository } from './favourites.repository';

@Injectable()
export class FavouritesService {
  constructor(private readonly favouritesRepository: FavouritesRepository) {}

  async getAll(userId: number) {
    return this.favouritesRepository.findAllByUser(userId);
  }

  async add(imageUrl: string, userId: number) {
    const alreadyExists = await this.favouritesRepository.exists(
      imageUrl,
      userId,
    );
    if (alreadyExists) throw new ConflictException('Image already favourited');
    return this.favouritesRepository.create(imageUrl, userId);
  }

  async remove(imageUrl: string, userId: number) {
    const exists = await this.favouritesRepository.exists(imageUrl, userId);
    if (!exists) throw new NotFoundException('Favourite not found');
    return this.favouritesRepository.delete(imageUrl, userId);
  }
}

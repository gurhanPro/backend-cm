import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FavouritesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllByUser(userId: number) {
    return this.prisma.favourite.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(imageUrl: string, userId: number) {
    return this.prisma.favourite.create({ data: { imageUrl, userId } });
  }

  async delete(imageUrl: string, userId: number) {
    return this.prisma.favourite.delete({
      where: { imageUrl_userId: { imageUrl, userId } },
    });
  }

  async exists(imageUrl: string, userId: number) {
    const favourite = await this.prisma.favourite.findUnique({
      where: { imageUrl_userId: { imageUrl, userId } },
    });
    return !!favourite;
  }
}

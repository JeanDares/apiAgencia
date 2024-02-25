import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaService } from 'src/database/PrismaServices';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaServices';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const personExists = await this.prisma.user.findFirst({
      where: {
        cpf: createUserDto.cpf,
      },
    });

    if (personExists) {
      throw new NotFoundException('Cliente já cadastrado');
    }

    const userToCreate = { ...createUserDto };

    // Verifica se dataNascimento é uma string e tenta fazer o parse para Date
    if (typeof userToCreate.dataNascimento === 'string') {
      userToCreate.dataNascimento = new Date(userToCreate.dataNascimento);
    }

    const user = await this.prisma.user.create({
      data: userToCreate,
    });

    return user;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    // Verifica se dataNascimento é uma string e tenta fazer o parse para Date
    if (typeof updateUserDto.dataNascimento === 'string') {
      updateUserDto.dataNascimento = new Date(updateUserDto.dataNascimento);
    }

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    return user;
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    await this.prisma.user.delete({
      where: { id },
    });

    return `Usuário ${user.nome} ${user.sobrenome} removido com sucesso`;
  }
}

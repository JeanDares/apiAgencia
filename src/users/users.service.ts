import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const currentMaxId =
      this.users.length > 0
        ? Math.max(...this.users.map((user) => user.pessoaID))
        : 0;
    const pessoaID = currentMaxId + 1;

    const user: User = {
      pessoaID,
      ...createUserDto,
    };

    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.pessoaID === id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    const updatedUser = {
      ...user,
      ...updateUserDto,
    };
    const index = this.users.findIndex((user) => user.pessoaID === id);
    this.users[index] = updatedUser;
    return updatedUser;
  }

  remove(id: number) {
    const index = this.users.findIndex((user) => user.pessoaID === id);
    if (index === -1) {
      throw new NotFoundException('Usuário não encontrado');
    }
    const removedUser = this.users.splice(index, 1)[0];
    return `Usuário ${removedUser.nome} ${removedUser.sobrenome} removido com sucesso`;
  }
}

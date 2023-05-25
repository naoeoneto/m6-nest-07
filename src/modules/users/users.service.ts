import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
    // return 'This action adds a new user';
  }

  findAll() {
    return this.usersRepository.findAll();
    // return `This action returns all users`;
  }

  findOne(id: string) {
    const findUser = this.usersRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException('user not found');
    }
    return findUser;
    // return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = this.usersRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException('user not found');
    }
    return this.usersRepository.update(id, updateUserDto);
    // return `This action updates a #${id} user`;
  }

  remove(id: string) {
    const findUser = this.usersRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException('user not found');
    }
    return this.usersRepository.delete(id);
    // return `This action removes a #${id} user`;
  }
}

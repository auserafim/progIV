// src/users/users.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    // Mudança Crítica: Usamos @Inject clássico com o token gerado explicitamente pelo TypeORM.
    // Isso ignora completamente as falhas de reflexão de tipo do TypeScript em tempo de compilação.
    @Inject(getRepositoryToken(User))
    private usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create(email: string, password: string): Promise<User> {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    
    const newUser = this.usersRepository.create({ email, passwordHash });
    return this.usersRepository.save(newUser);
  }
}
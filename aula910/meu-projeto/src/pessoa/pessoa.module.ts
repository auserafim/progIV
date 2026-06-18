// src/pessoa/pessoa.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './pessoa.entity';

@Module({
  imports: [
    // Se passar a classe 'Pessoa' estoura o erro por conta da versão antiga,
    // garanta que a entidade foi exportada corretamente no arquivo pessoa.entity.ts
    TypeOrmModule.forFeature([Pessoa]), 
  ],
  exports: [TypeOrmModule],
})
export class PessoaModule {}
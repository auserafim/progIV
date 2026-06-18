import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // 1. Configuração global do TypeORM adicionada aqui
    TypeOrmModule.forRoot({
      type: 'postgres', // Ajuste para o seu banco real (postgres, mysql, etc)
      host: 'localhost',
      port: 5432,
      username: 'seu_usuario',
      password: 'sua_senha',
      database: 'seu_banco',
      autoLoadEntities: true, // Essencial para carregar as entidades do PessoaModule automaticamente
      synchronize: true, // Lembrete: Mude para 'false' quando for para produção
    }),
    
    // 2. Importação do módulo de autenticação
    AuthModule,
    
    // 3. Seu módulo existente
    PessoaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// src/main.ts
// PATCH DE COMPATIBILIDADE: Corrige a remoção de util.isNullOrUndefined no Node 26+
import * as util from 'util';
if (!(util as any).isNullOrUndefined) {
  (util as any).isNullOrUndefined = (value: any) => value === null || value === undefined;
}

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // habilita validação global dos DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove campos não definidos no DTO
      forbidNonWhitelisted: true, // lança erro para campos extras
      transform: true, // converte tipos automaticamente
    }),
  );

  // prefixo global das rotas
  app.setGlobalPrefix('api');

  // habilita CORS
  app.enableCors();

  // inicia servidor
  await app.listen(3000);

  console.log(`🚀 Server running on: http://localhost:3000/api`);
}

bootstrap();
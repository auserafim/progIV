import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentModule } from './content/content.module'; // <-- Deixe apenas UMA linha desta

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nestuser',
      password: 'nestpassword',
      database: 'content_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ContentModule,
  ],
})
export class AppModule {}

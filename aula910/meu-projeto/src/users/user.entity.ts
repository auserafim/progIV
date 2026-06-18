import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User { // <-- MAKE SURE 'export' IS HERE
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;
}
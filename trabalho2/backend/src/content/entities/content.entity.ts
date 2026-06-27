import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('contents')
export class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ default: 'character' })
  category: string;

  @Column('text')
  content: string;

  @Column({ nullable: true })
  image_url: string;

  @Column({ type: 'int', default: 0 })
  display_order: number;

  @Column({ nullable: true })
  especie: string;

  @Column({ nullable: true })
  sanidade: string;
}

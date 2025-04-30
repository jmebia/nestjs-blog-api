// src/blog/entities/post.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

//   @Column()
//   author: string;

//   @Column()
//   createdAt: Date;
}

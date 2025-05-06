// src/blog/entities/post.entity.ts

import { BaseEntityWithTimestamps } from 'src/common/entities/base.entity';
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column } from 'typeorm';

@Entity()
export class User extends BaseEntityWithTimestamps {

  @Column()
  username: string;

  @Column('text')
  password: string;

  @Column()
  author: string;
}

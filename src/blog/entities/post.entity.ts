// src/blog/entities/post.entity.ts

import { BaseEntityWithTimestamps } from 'src/common/entities/base.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Post extends BaseEntityWithTimestamps {

  @Column()
  title: string;

  @Column('text')
  content: string;

}

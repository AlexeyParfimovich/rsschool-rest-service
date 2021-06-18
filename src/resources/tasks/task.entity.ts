/**
 * Task model
 * @module taskModel
 */

import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v1 as uuid } from 'uuid';

import { Board } from '../boards/board.entity';
import { User } from '../users/user.entity';

/**
 * Class to create a Task object
 */
@Entity()
export class Task {

  @PrimaryColumn()
  id: string; // Task identifier

  @Column('varchar')
  title: string; // Task title

  @Column('int')
  order: number; // Task order

  @Column('varchar')
  description: string; // Task description 

  @Column('varchar', { nullable: true })
  userId: string | null;

  @ManyToOne(() => User, (user: User) => user.id, {
    onDelete: "SET NULL",
    nullable: true
  })
  @JoinColumn({ name: 'userId' })
  user!: string | null; // User identifier

  @Column('varchar', { nullable: true })
  boardId: string | null;

  @ManyToOne(() => Board, (board: Board) => board.id, {
    onDelete: "CASCADE",
    nullable : true
  })
  @JoinColumn({ name: 'boardId' })
  board!: string | null; // Board identifier

  @Column('varchar', { nullable: true })
  columnId: string | null; // Column identifier

  constructor({
    id = uuid(),
    title = 'none',
    order = 0,
    description = 'none',
    userId = null,
    boardId = null,
    columnId = null
  }: Partial<Task> = {}) {
    
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  };
}

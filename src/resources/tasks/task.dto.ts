// import { Board } from "../boards/board.entity";
// import { User } from "../users/user.entity";

export class TaskDto {
  readonly title!: string; // Task title

  readonly order!: number; // Task order

  readonly description!: string; // Task description 

  readonly userId!: string | null; // User identifier

  readonly boardId!: string | null; // Board identifier

  readonly columnId!: string | null; // Column identifier
}
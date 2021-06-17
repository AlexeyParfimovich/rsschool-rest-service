export class TaskDto {
  readonly title!: string; // Task title

  readonly order!: string; // Task order

  readonly description!: string; // Task description 

  readonly user!: string | null; // User identifier

  readonly board!: string | null; // Board identifier

  readonly column!: string | null; // Column identifier
}
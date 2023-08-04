export interface Item {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
}

export interface UpdatedTodo {
  id?: number;
  todo?: string;
  isCompleted?: boolean;
  userId?: number;
}

export default {};

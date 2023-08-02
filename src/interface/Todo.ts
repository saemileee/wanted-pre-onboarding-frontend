export interface Item {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
  isEditMode: boolean;
}

export interface UpdateTodo {
  id?: number;
  todo?: string;
  isCompleted?: boolean;
  userId?: number;
  isEditMode?: boolean;
}

export default {};

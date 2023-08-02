import { Context, Dispatch, SetStateAction, createContext } from 'react';
import * as TodoType from '../../interface/Todo';

interface TodoContextType {
  todos: TodoType.Item[];
  setTodos: Dispatch<SetStateAction<TodoType.Item[]>>;
}

export const TodoContext: Context<TodoContextType> = createContext<TodoContextType>(
  {} as TodoContextType
);

export default {};

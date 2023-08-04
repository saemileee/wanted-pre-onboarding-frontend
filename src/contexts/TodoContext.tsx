import React, { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';
import * as TodoType from '../interface/Todo';

type TodoAction =
  | { type: 'GET'; payload: TodoType.Item[] }
  | { type: 'CREATE'; payload: TodoType.Item }
  | { type: 'DELETE'; payload: number }
  | { type: 'UPDATE'; payload: TodoType.Item };

interface TodoProviderProps {
  children: ReactNode;
}

const initialState: TodoType.Item[] | [] = [];
const TodoStateContext = createContext<TodoType.Item[] | undefined>(undefined);

type TodosDispatch = Dispatch<TodoAction>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined);

const todoReducer = (todos: TodoType.Item[], action: TodoAction): TodoType.Item[] => {
  switch (action.type) {
    case 'GET':
      return action.payload;

    case 'CREATE':
      return [...todos, action.payload];

    case 'DELETE':
      return todos.filter((todo) => todo.id !== action.payload);

    case 'UPDATE':
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.todo, isCompleted: action.payload.isCompleted }
          : todo
      );
    default:
      return todos;
  }
};

export function TodoProvider({ children }: TodoProviderProps) {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodoStateContext.Provider value={todoState}>{children}</TodoStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}

export function useTodoState() {
  const state = useContext(TodoStateContext);
  if (!state) throw new Error('TodosProvider not found');
  return state;
}

export function useTodoDispatch() {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error('TodosProvider not found');
  return dispatch;
}

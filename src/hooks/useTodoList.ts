import { useTodoDispatch } from '../contexts/TodoContext';
import * as todoFetcher from '../api/todoFetcher';

const useTodoList = () => {
  const todoDispatch = useTodoDispatch();

  const getTodos = async () => {
    try {
      const res = await todoFetcher.getTodos();
      todoDispatch({ type: 'GET', payload: res.data });
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const createTodo = async (value: string) => {
    try {
      const res = await todoFetcher.createTodo({ todo: value });
      todoDispatch({ type: 'CREATE', payload: res.data });
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const updateTodo = async (id: number, value: string, isCompleted: boolean) => {
    try {
      const req = { todo: value, isCompleted };
      const res = await todoFetcher.updateTodo(id, req);
      todoDispatch({ type: 'UPDATE', payload: res.data });
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await todoFetcher.deleteTodo(id);
      todoDispatch({ type: 'DELETE', payload: id });
    } catch (err: any) {
      throw new Error(err);
    }
  };

  return {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useTodoList;

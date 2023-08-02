import { useContext } from 'react';
import * as TodoType from '../interface/Todo';
import { TodoContext } from '../contexts/TodoContext/context';

const useTodoList = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoList must be used within a TodoContextProvider');
  }

  const { todos, setTodos } = context;

  const addTodo = (value: string) => {
    const newTodo: TodoType.Item = {
      id: todos.length,
      todo: value,
      isCompleted: false,
      userId: 1,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((item: TodoType.Item) => item.id !== id));
  };

  const checkTodo = (id: number) => {
    setTodos(
      todos.map((item: TodoType.Item): TodoType.Item => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      })
    );
  };

  const updateTodo = (id: number, value: string) => {
    setTodos(
      todos.map((item: TodoType.Item): TodoType.Item => {
        if (item.id === id) {
          return { ...item, todo: value };
        }
        return item;
      })
    );
  };

  return {
    todos,
    addTodo,
    removeTodo,
    checkTodo,
    updateTodo,
  };
};

export default useTodoList;

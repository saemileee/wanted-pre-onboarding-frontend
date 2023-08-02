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
      isEditMode: false,
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

  const handleEditClick = (id: number) => {
    setTodos(
      todos.map((item: TodoType.Item): TodoType.Item => {
        if (item.id === id) {
          return { ...item, isEditMode: true };
        }
        return item;
      })
    );
  };

  const handleEditCancelClick = (id: number) => {
    setTodos(
      todos.map((item: TodoType.Item): TodoType.Item => {
        if (item.id === id) {
          return { ...item, isEditMode: false };
        }
        return item;
      })
    );
  };

  const updateTodo = (id: number, value: string) => {
    setTodos(
      todos.map((item: TodoType.Item): TodoType.Item => {
        if (item.id === id) {
          return { ...item, todo: value, isEditMode: false };
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
    handleEditClick,
    handleEditCancelClick,
  };
};

export default useTodoList;

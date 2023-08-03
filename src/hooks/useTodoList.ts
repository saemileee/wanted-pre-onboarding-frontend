import { useContext } from 'react';
import * as TodoType from '../interface/Todo';
import { TodoContext } from '../contexts/TodoContext/context';
import * as todoFetcher from '../api/todoFetcher';

const useTodoList = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoList must be used within a TodoContextProvider');
  }

  const { todos, setTodos } = context;

  const getTodos = () => {
    const fetchData = async () => {
      try {
        const res = await todoFetcher.getTodos();
        if (res.status === 200) {
          setTodos(res.data);
        }
      } catch (err: any) {
        throw new Error(err);
      }
    };
    fetchData();
  };

  const addTodo = (value: string) => {
    const newTodo: TodoType.Item = {
      id: 0,
      todo: value,
      isCompleted: false,
      userId: 0,
      isEditMode: false,
    };
    const fetchData = async () => {
      try {
        const res = await todoFetcher.createTodo(newTodo);
        setTodos([...todos, res.data]);
      } catch (err: any) {
        throw new Error(err);
      }
    };
    fetchData();
  };

  const removeTodo = (id: number) => {
    const fetchData = async () => {
      try {
        await todoFetcher.deleteTodo(id);
        setTodos(todos.filter((item: TodoType.Item) => item.id !== id));
      } catch (err: any) {
        throw new Error(err);
      }
    };
    fetchData();
  };

  const updateTodo = (id: number, value: string, isCompleted: boolean) => {
    const newTodo = { todo: value, isCompleted, isEditMode: false };
    const fetchData = async () => {
      try {
        await todoFetcher.updateTodo(id, newTodo);
        setTodos(
          todos.map((item: TodoType.Item): TodoType.Item => {
            if (item.id === id) {
              return { ...item, todo: value, isEditMode: false, isCompleted };
            }
            return item;
          })
        );
      } catch (err: any) {
        throw new Error(err);
      }
    };
    fetchData();
  };

  const toggleEditMode = (id: number) => {
    setTodos(
      todos.map((item: TodoType.Item): TodoType.Item => {
        if (item.id === id) {
          return { ...item, isEditMode: !item.isEditMode };
        }
        return item;
      })
    );
  };

  return {
    getTodos,
    todos,
    addTodo,
    removeTodo,
    updateTodo,
    toggleEditMode,
  };
};

export default useTodoList;

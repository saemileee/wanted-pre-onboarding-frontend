import React, { useEffect, useState } from 'react';
import * as TodoType from '../../interface/Todo';
import Item from './Item';
import todoStyles from '../../styles/Todo/todo.module.scss';
import { useTodoState } from '../../contexts/TodoContext';

function TodoList() {
  const todoState = useTodoState();

  const [todoList, setTodoList] = useState<TodoType.Item[]>(todoState);

  useEffect(() => {
    setTodoList(todoState);
  }, [todoState]);

  const handleSetTodoList = (id: number, value: string) => {
    setTodoList((prev) => prev.map((item) => (item.id === id ? { ...item, todo: value } : item)));
  };

  return (
    <ul className={todoStyles.ulContainer}>
      {todoList.map((todoItem: TodoType.Item) => {
        const { id } = todoItem;
        return (
          <li className={todoStyles.listContainer} key={`todo-${id}`}>
            <Item setTodoList={handleSetTodoList} item={todoItem} />
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;

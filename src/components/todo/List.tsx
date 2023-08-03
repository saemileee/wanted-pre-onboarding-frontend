import React, { useState } from 'react';
import useTodoList from '../../hooks/useTodoList';
import * as TodoType from '../../interface/Todo';
import { Item, EditModeItem } from './Item';

function TodoList() {
  const [todosValue, setTodosValue] = useState<string[]>([]);

  const handleSetTodoValue = (id: number, value: string) => {
    setTodosValue(() => {
      const newTodos = [...todosValue];
      newTodos[id] = value;
      return newTodos;
    });
  };

  const { todos } = useTodoList();
  return (
    <ul>
      {todos.map((todoItem: TodoType.Item) => {
        const { isEditMode, id } = todoItem;
        return (
          <li key={`todo-${id}`}>
            {isEditMode ? (
              <EditModeItem
                todoValue={todosValue[id]}
                setTodoValue={handleSetTodoValue}
                item={todoItem}
              />
            ) : (
              <Item setTodoValue={handleSetTodoValue} item={todoItem} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;

import React, { useMemo, useState } from 'react';
import { TodoContext } from './context';
import * as TodoType from '../../interface/Todo';

function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<TodoType.Item[]>([]);

  const todoData = useMemo(
    () => ({
      todos,
      setTodos,
    }),
    [todos]
  );

  return <TodoContext.Provider value={todoData}>{children}</TodoContext.Provider>;
}

export default TodoProvider;

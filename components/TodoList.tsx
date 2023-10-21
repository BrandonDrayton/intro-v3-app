import Todo from './Todo'

import React, { FC } from 'react'

interface Todo {
  id: string
  content: string
  completed: boolean
}

interface TodoListProps {
  todos: Todo[]
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList

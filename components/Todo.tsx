'use client'
import { completeTodo } from '@/utils/actions'

interface TodoProps {
  todo: {
    id: string
    content: string
    completed: boolean
  }
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <div
      className={`px-8 py-2 border border-white/25 cursor-pointer ${
        todo.completed ? 'line-through text-black/30' : ''
      }`}
      onClick={() => completeTodo(todo.id)}
    >
      {todo.content}
    </div>
  )
}

export default Todo

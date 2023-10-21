import React, { FC } from 'react'
import db from '@/utils/db'

const getData = async () => {
  const todos = await db.todo.findMany({})
  return todos
}

const ToDosPage: FC = async () => {
  const todos = await getData()
  return <div>What to do?</div>
}

export default ToDosPage

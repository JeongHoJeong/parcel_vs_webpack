import React from 'react'
import styled from 'styled-components'

import { ITodo } from '@/models/todo'
import { TodoItem } from '@/components/TodoItem'

interface IProps {
  todos: ITodo[]
  onTodoChange(id: number, done: boolean): void
}

const Wrapper = styled.div`
  width: 320px;
  margin-top: 16px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
`

export class TodoList extends React.Component<IProps> {
  public render() {
    const { todos, onTodoChange } = this.props

    return (
      <Wrapper>
        {todos.map((todo) =>
          <TodoItem
            key={todo.id}
            todo={todo}
            onStatusChange={(status) => onTodoChange(todo.id, status)}
          />
        )}
      </Wrapper>
    )
  }
}

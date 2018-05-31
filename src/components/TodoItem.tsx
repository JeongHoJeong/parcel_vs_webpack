import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import { ITodo } from '@/models/todo'
import { Checkbox } from '@/components/Checkbox'

interface IProps {
  todo: ITodo
  onStatusChange(done: boolean): void
}

const growTimeInMs = 500
const itemHeight = 48

const Wrapper = styled.div`
  position: relative;
  transition: max-height ${growTimeInMs}ms ease;
  overflow: hidden;

  & + & {
    border-top: 1px solid #c9cdd2;
  }

  &.grow-appear {
    max-height: 0;
  }

  &.grow-appear-active,
  &.grow-enter-done {
    max-height: ${itemHeight}px;
  }
`

const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
  height: ${itemHeight}px;
  box-sizing: border-box;

  line-height: ${itemHeight}px;
  font-size: 16px;
  font-weight: 300;
  color: #454c53;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  button {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid #454c53;
    background-color: white;
  }
`

const Text = styled.div`
  display: inline-block;
  margin-left: 8px;
  text-decoration-color: transparent;
  transition: color 100ms ease;

  &.done {
    text-decoration: line-through;
    text-decoration-color: orange;
    color: #72787f;
  }
`

export class TodoItem extends React.Component<IProps> {
  public render() {
    const { todo, onStatusChange } = this.props

    return (
      <CSSTransition
        timeout={growTimeInMs}
        classNames='grow'
        in={true}
        appear={true}
      >
        <Wrapper>
          <Content>
            <Checkbox
              checked={todo.done}
              onChange={(checked) => onStatusChange(checked)}
            />
            <Text className={todo.done ? 'done' : ''}>
              {todo.title}
            </Text>
          </Content>
        </Wrapper>
      </CSSTransition>
    )
  }
}

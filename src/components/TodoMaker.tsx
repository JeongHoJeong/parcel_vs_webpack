import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import PlusIcon from '@/assets/plus.svg'
import { observable } from 'mobx';

interface IProps {
  onCreate(title: string): void
}

const todoMakerButtonSize = 40
const inputHeight = 40

const Wrapper = styled.form`
  display: flex;
  align-items: center;

  input {
    border: none;
    border-bottom: 1px solid #72787f;
    color: #454c53;
    outline: none;
    width: 240px;
    font-size: 24px;
    font-weight: 300;
    height: ${inputHeight}px;
    line-height: ${inputHeight}px;
    padding: 8px;
  }

  button {
    margin-left: 16px;
    border: none;
    background-color: orange;
    background-position: center;
    background-size: ${todoMakerButtonSize / 2}px;
    background-repeat: no-repeat;
    width: ${todoMakerButtonSize}px;
    height: ${todoMakerButtonSize}px;
    border-radius: ${todoMakerButtonSize / 2}px;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    cursor: pointer;
    filter: drop-shadow(4px 4px 0.4rem rgba(0, 0, 0, 0.1));
    transition: background-color 100ms ease, transform 100ms ease;

    &:hover {
      background-color: red;
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.85);
    }
  }
`

@observer
export class TodoMaker extends React.Component<IProps> {
  @observable private value: string = ''

  public render() {
    const { onCreate } = this.props

    return (
      <Wrapper
        onSubmit={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
      >
        <input
          value={this.value}
          onChange={(e) => this.value = e.currentTarget.value}
        />
        <button
          onClick={() => {
            const newValue = this.value
            this.value = ''
            onCreate(newValue)
          }}
          type='main'
          style={{ backgroundImage: `url('${PlusIcon}')` }}
        />
      </Wrapper>
    )
  }
}

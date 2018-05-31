import React from 'react'
import styled from 'styled-components'

interface IProps {
  checked: boolean
  onChange(checked: boolean): void
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  input {
    width: 16px;
    height: 16px;
    background-color: white;
    border: 1px solid #72787f;
    border-radius: 2px;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
  }

  input:checked + div:after {
    content: '';
    position: absolute;
    width: 4px;
    height: 6px;
    background-color: transparent;
    border-color: orange;
    border-bottom: 2px solid orange;
    border-right: 2px solid orange;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    user-select: none;
    pointer-events: none;
  }
`

export class Checkbox extends React.Component<IProps> {
  public render() {
    const { checked, onChange } = this.props

    return (
      <Wrapper>
        <input
          type='checkbox'
          checked={checked}
          onChange={(e) => onChange(e.currentTarget.checked)}
        />
        <div />
      </Wrapper>
    )
  }
}

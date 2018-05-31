import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export class Page extends React.Component {
  public render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}

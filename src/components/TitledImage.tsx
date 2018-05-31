import React from 'react'
import styled from 'styled-components'

interface IProps {
  title: string
  src: string
  width: number
  height: number
}

const Wrapper = styled.div`
  text-align: center;
  font-weight: 300;
  color: #454c53;
`

const Message = styled.div`
  margin-top: 8px;
`

export class TitledImage extends React.Component<IProps> {
  public render() {
    const { title, src, width, height } = this.props

    return (
      <Wrapper>
        <img
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
          src={src}
        />
        <Message>{title}</Message>
      </Wrapper>
    )
  }
}

import React from 'react'

interface IProps {
  title: string
  src: string
}

export class TitledImage extends React.Component<IProps> {
  public render() {
    const { title, src } = this.props

    return (
      <div>
        <div>{title}</div>
        <img src={src} />
      </div>
    )
  }
}

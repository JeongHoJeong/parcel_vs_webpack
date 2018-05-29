import React from 'react'
import { AsyncComponent } from './AsyncComponent'

import WhaleImage from '../assets/whale.svg'

interface IProps {
  title: string
}

const imageProvider = () => import('./TitledImage').then((data) => ({ Component: data.TitledImage }))

export class App extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    const { title } = this.props

    return (
      <>
        <h1>{title}</h1>
        <AsyncComponent
          moduleProvider={imageProvider}
          childProps={{
            title: 'Wow, I was lazily loaded :)',
            src: WhaleImage,
          }}
        />
      </>
    )
  }
}

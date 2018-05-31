import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

import { AsyncComponent } from '@/components/AsyncComponent'
import { Page } from '@/components/Page'
import { Store } from '@/store'

import Image from '@/assets/light-bulb.svg'

const imageProvider = () =>
  import('@/components/TitledImage')
    .then((data) => (
      { Component: data.TitledImage }
    ))

const Message = styled.div`
  margin-top: 8px;
  font-weight: 300;
  font-size: 12px;
  color: #72787f;
`

@inject('store')
@observer
export class HomePage extends React.Component<{store?: Store}> {
  public render() {
    const store = this.props.store!
    const { numAllTodos, numCompletedTodos } = store
    const numNotCompletedTodos = numAllTodos - numCompletedTodos

    return (
      <Page>
        <AsyncComponent
          moduleProvider={imageProvider}
          childProps={{
            title: 'Hello :)',
            src: Image,
            width: 40,
            height: 40,
          }}
        />
        <Message>
          You have {numNotCompletedTodos} todo{numNotCompletedTodos === 1 ? '' : 's'}.
        </Message>
        <Message>
          The icons in this page are <a href='https://octicons.github.com/'>GitHub Octicons.</a>
        </Message>
      </Page>
    )
  }
}

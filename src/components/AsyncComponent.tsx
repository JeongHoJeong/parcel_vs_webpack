import React from 'react'

interface IProps<T, U> {
  moduleProvider: () => Promise<{Component: T}>
  childProps: U
  loader?: React.ReactNode,
}

interface IState<T> {
  Component: T | null
}

export class AsyncComponent<T extends React.ComponentClass<U>, U> extends React.PureComponent<IProps<T, U>, IState<T>> {
  constructor(props: IProps<T, U>) {
    super(props)

    this.state = {
      Component: null
    }
  }

  componentWillMount() {
    if (!this.state.Component) {
      this.props.moduleProvider()
        .then(({ Component }) =>
          this.setState({ Component }
        ))
    }
  }

  render() {
    const { childProps, loader } = this.props
    const { Component } = this.state

    return Component ?
      <Component {...childProps} /> : (loader || null)
  }
}

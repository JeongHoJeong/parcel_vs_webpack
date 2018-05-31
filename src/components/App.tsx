import React from 'react'
import { Provider } from 'mobx-react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import { Store } from '@/store'
import { AsyncComponent } from '@/components/AsyncComponent'

const store = new Store()

interface IPageRoute {
  path?: string
  loader(): Promise<React.ComponentClass>
}

const navBarProvider = () => import('@/components/NavBar').then((data) => ({ Component: data.NavBar }))

const routes: IPageRoute[] = [
  {
    path: '/',
    loader: () => import('@/pages/HomePage').then((data) => data.HomePage)
  },
  {
    path: '/todos',
    loader: () => import('@/pages/TodosPage').then((data) => data.TodosPage)
  },
  {
    loader: () => import('@/pages/NotFoundPage').then((data) => data.NotFoundPage)
  },
]

function renderRoutes() {
  return routes.map((route) => {
    const moduleProvider = () => route.loader().then((result) => {
      return {
        Component: result,
      }
    })
    const renderer = () => (
      <AsyncComponent
        moduleProvider={moduleProvider}
        childProps={{}}
      />
    )

    return (
      <Route
        key={route.path || 'notFoundPage'}
        exact={true}
        path={route.path}
        render={renderer}
      />
    )
  })
}

const appBgColor = 'white'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: ${appBgColor};
  overflow: hidden;

  font-family: 'Apple SD Gothic Neo';

  body:not(&) {
    background-color: ${appBgColor};
  }

  a {
    text-decoration: none;
  }
`

export class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Wrapper>
            <Route>
              {(match) =>
                <AsyncComponent
                  moduleProvider={navBarProvider}
                  childProps={{
                    match,
                  }}
                />
              }
            </Route>
            <Switch>
              {renderRoutes()}
            </Switch>
          </Wrapper>
        </BrowserRouter>
      </Provider>
    )
  }
}

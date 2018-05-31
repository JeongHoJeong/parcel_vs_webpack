import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { RouteComponentProps } from 'react-router'

interface IProps {
  // This prop is needed to resolve MobX's update blocking.
  // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
  match: RouteComponentProps<{}>
}

const fadeInTimeInMs = 500

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 16px 24px;

  background-color: white;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: opacity ${fadeInTimeInMs}ms ease-in-out;

  a {
    font-weight: 300;
    font-size: 20px;
    color: #454c53;
    letter-spacing: 0.03em;
    transition: border-color 100ms;
    border-color: rgba(0, 0, 0, 0);

    &.active {
      border-bottom: 2px orange solid;
    }
  }

  a + a {
    margin-left: 16px;
  }

  &.fade-appear {
    opacity: 0;
  }

  &.fade-appear-active,
  &.fade-enter-done {
    opacity: 1;
  }
`

export class NavBar extends React.Component<IProps> {
  public render() {
    return (
      <CSSTransition
        timeout={fadeInTimeInMs}
        classNames='fade'
        in={true}
        appear={true}
      >
        <Wrapper>
          <NavLink to='/' exact={true}>HOME</NavLink>
          <NavLink to='/todos' exact={true}>TODOS</NavLink>
        </Wrapper>
      </CSSTransition>
    )
  }
}

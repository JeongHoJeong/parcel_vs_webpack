import React from 'react'
import { observer, inject } from 'mobx-react'

import { Store } from '@/store'
import { Page } from '@/components/Page'
import { TodoMaker } from '@/components/TodoMaker'
import { TodoList } from '@/components/TodoList';

@inject('store')
@observer
export class TodosPage extends React.Component<{store?: Store}> {
  public render() {
    const store = this.props.store!

    return (
      <Page>
        <TodoMaker
          onCreate={(title) => store.add(title)}
        />
        <TodoList
          todos={store.todos}
          onTodoChange={(id, done) => store.changeStatus(id, done)}
        />
      </Page>
    )
  }
}

import { observable, action, computed } from 'mobx'

import { ITodo } from '@/models/todo'

export class Store {
  @observable private _todos: ITodo[] = []

  private _latestTodoId: number = 0

  @computed
  public get todos() {
    return [...this._todos]
  }

  @computed
  public get numCompletedTodos() {
    return this._todos.filter((todo) => todo.done).length
  }

  @computed
  public get numAllTodos() {
    return this._todos.length
  }

  /**
   * Buggy example: This getter doesn't invoke rerender of React component.
   *
  @computed
  public get todos() {
    return this._todos
  }
   */

  @action
  public add(title: string) {
    this._todos.push({
      title,
      done: false,
      id: ++this._latestTodoId,
    })
  }

  @action
  public changeStatus(id: number, done: boolean) {
    const idx = this._todos.findIndex((todo) => todo.id === id)

    if (idx !== -1) {
      this._todos[idx] = {...this._todos[idx], done,}
      /**
       * Buggy example: This does not update the React component.
       *
      this._todos[idx].done = done
       */
    }
  }
}

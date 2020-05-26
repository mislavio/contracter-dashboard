import { AccountStore } from './accountStore'
import { createContext } from 'react'
import { action, reaction, observable } from 'mobx'

export class GlobalStore {
  accountStore: AccountStore

  constructor() {
    this.accountStore = new AccountStore(this)

    reaction(
      () => this.token,
      (token) => {
        if (token) {
          window.localStorage.setItem('jwt', token)
        } else {
          window.localStorage.removeItem('jwt')
        }
      },
    )
  }

  @observable token: string = window.localStorage.getItem('jwt') || ''

  @action setToken = (token: string): void => {
    this.token = token
  }
}

export const globalStoreContext = createContext(new GlobalStore())

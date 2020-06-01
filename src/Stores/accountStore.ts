import { observable, action, computed } from 'mobx'
import { AccountModel, SignInFormParameters, SignUpFormParameters } from '../models'
import { GlobalStore } from './globalStore'
import agent from '../agents'
import { history } from '../'

export class AccountStore {
  globalStore: GlobalStore

  constructor(globalStore: GlobalStore) {
    this.globalStore = globalStore
  }

  @observable account: AccountModel = {
    email: '',
    firstName: '',
    lastName: '',
    token: '',
    id: '',
  }

  @computed get isAuthenticated(): boolean {
    if (this.account.id) {
      return true
    }
    return false
  }

  @action signin = async (formParams: SignInFormParameters): Promise<void> => {
    try {
      this.account = await agent.Account.signin(formParams)
      this.globalStore.setToken(this.account.token)
      history.push('/contracts')
    } catch (error) {
      console.error(error)
      return
    }
  }

  @action signup = async (formParams: SignUpFormParameters): Promise<void> => {
    try {
      await agent.Account.signup(formParams)
      history.push('/signin')
    } catch (error) {
      console.error(error)
      return
    }
  }

  @action fetchAccount = async (): Promise<void> => {
    try {
      this.account = await agent.Account.currentAccount()
    } catch (error) {
      console.error(error)
      return
    }
  }

  @action signout = (): void => {
    this.globalStore.setToken('')
    this.account = {
      email: '',
      firstName: '',
      lastName: '',
      token: '',
      id: '',
    }
  }
}

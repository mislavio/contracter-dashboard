import React, { useEffect, useContext } from 'react'
import { SignIn, SignUp } from './Containers'
import { Container, Button, Label } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import { Route, Redirect, Switch } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { globalStoreContext } from './Stores/globalStore'

const App: React.FC = () => {
  const globalStore = useContext(globalStoreContext)
  const { token } = globalStore
  const { fetchAccount, isAuthenticated, account, signout } = globalStore.accountStore

  useEffect(() => {
    if (token) {
      fetchAccount()
    }
  }, [fetchAccount, token])

  if (isAuthenticated) {
    return (
      <Container className={'App'}>
        <Label>Welcome {account.email}</Label>
        <Button onClick={signout}>Signout</Button>
      </Container>
    )
  }

  return (
    <Container className={'App'}>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={SignIn} />
        <Redirect path="/*" to="/" />
      </Switch>
    </Container>
  )
}

export default observer(App)

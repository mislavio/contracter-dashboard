import React, { useEffect, useContext } from 'react'
import { SignIn, SignUp } from './Containers'
import { Container } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import { Route, Redirect, Switch } from 'react-router-dom'
import LoadingOverlay from 'Components/Loader'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { globalStoreContext } from './Stores/globalStore'
import SidebarDashboard from 'Components/Sidebar'
import { Contracts } from 'Containers/ContractsPage'

const App: React.FC = () => {
  const globalStore = useContext(globalStoreContext)
  const { token, setAppToLoaded, appIsLoaded } = globalStore
  const { fetchAccount, isAuthenticated } = globalStore.accountStore

  useEffect(() => {
    if (token) {
      fetchAccount().finally(() => setAppToLoaded())
    } else {
      setAppToLoaded()
    }
  }, [fetchAccount, token, setAppToLoaded])

  if (!appIsLoaded) return <LoadingOverlay content="Loading Contracter" />

  if (isAuthenticated) {
    return (
      <>
        <Container className={'App'}>
          <SidebarDashboard />
          <Container className={'DashboardContent'}>
            <Switch>
              <Route exact path="/contracts" component={Contracts} />
            </Switch>
          </Container>
        </Container>
      </>
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

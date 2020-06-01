import React, { useContext } from 'react'
import { Header, Container, Button } from 'semantic-ui-react'
import { globalStoreContext } from 'Stores/globalStore'

export const Contracts: React.FC = () => {
  const globalStore = useContext(globalStoreContext)
  const { account, signout } = globalStore.accountStore
  return (
    <>
      <Header as="h1" dividing>
        Contracts
      </Header>
      <Container>
        <p>Welcome {account.email}</p>
        <Button onClick={signout}>Signout</Button>
      </Container>
    </>
  )
}

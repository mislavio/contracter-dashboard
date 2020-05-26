import React from 'react'
import { Grid, Header, Image, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { SignInForm } from '../Components'

export const SignIn: React.FC = () => {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          <Image src="/logo.png" /> Sign in to your account
        </Header>
        <SignInForm />
        <Message>
          New to us? <Link to={'/signup'}>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

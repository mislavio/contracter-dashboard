import React from 'react'
import { Grid, Header, Image, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { SignUpForm } from '../Components'

export const SignUp: React.FC = () => {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          <Image src="/logo.png" /> Account Sign Up
        </Header>
        <SignUpForm />
        <Message>
          Already have an account? <Link to={'/signin'}>Sign In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

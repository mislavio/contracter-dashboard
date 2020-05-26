import React, { useState, useContext } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { SignInFormParameters } from '../models'
import { globalStoreContext } from '../Stores/globalStore'

export const SignInForm: React.FC = () => {
  const globalStore = useContext(globalStoreContext)
  const { signin } = globalStore.accountStore
  const [signInCreds, setSignInCreds] = useState<SignInFormParameters>({
    email: '',
    password: '',
  })

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget

    setSignInCreds({ ...signInCreds, [name]: value })
  }

  return (
    <Form size="large">
      <Segment>
        <Form.Input
          fluid
          name="email"
          icon="user"
          iconPosition="left"
          placeholder="E-mail address"
          onChange={handleInputChange}
        />
        <Form.Input
          fluid
          name="password"
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          onChange={handleInputChange}
        />
        <Button fluid size="medium" onClick={(): Promise<void> => signin(signInCreds)}>
          Sign In
        </Button>
      </Segment>
    </Form>
  )
}

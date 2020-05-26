import React, { useState, useContext } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { SignUpFormParameters } from '../models'
import { globalStoreContext } from '../Stores/globalStore'

export const SignUpForm: React.FC = () => {
  const globalStore = useContext(globalStoreContext)
  const { signup } = globalStore.accountStore
  const [signUpCreds, setSignUpCreds] = useState<SignUpFormParameters>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  })

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget

    setSignUpCreds({ ...signUpCreds, [name]: value })
  }

  return (
    <Form size="large">
      <Segment>
        <Form.Input
          fluid
          name="firstName"
          icon="address book outline"
          iconPosition="left"
          placeholder="First Name"
          onChange={handleInputChange}
        />
        <Form.Input
          fluid
          name="lastName"
          icon="address book outline"
          iconPosition="left"
          placeholder="Last Name"
          onChange={handleInputChange}
        />
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
        <Button fluid size="medium" onClick={(): Promise<void> => signup(signUpCreds)}>
          Sign Up
        </Button>
      </Segment>
    </Form>
  )
}

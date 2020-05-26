export interface AccountModel {
  email: string
  firstName: string
  lastName: string
  token: string
  id: string
}

export interface SignInFormParameters {
  email: string
  password: string
}

export interface SignUpFormParameters {
  email: string
  firstName: string
  lastName: string
  password: string
}

// Typing of the Solidity v0.0.6+ ABI
interface FunctionComponent {
  name: string
  type: string
  components?: FunctionComponent[]
}

interface EventComponent {
  name: 'event'
  type: string
  components?: FunctionComponent[]
  indexed: boolean
}

interface FunctionABIObject {
  name: 'function' | 'constructer' | 'receiver'
  type: string
  inputs: FunctionComponent[]
  outputs: FunctionComponent[]
  stateMutability: string
}

interface EventABIObject {
  name: string
  type: string
  inputs: EventComponent[]
  anonymous: boolean
}

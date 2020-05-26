/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { AxiosResponse } from 'axios'
import { AccountModel, SignUpFormParameters, SignInFormParameters } from './models'

axios.defaults.baseURL = 'http://localhost:8000/'

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('jwt')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

const responseBody = (response: AxiosResponse) => response.data

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
}

const Account = {
  currentAccount: (): Promise<AccountModel> => requests.get('/auth/me'),
  signin: (account: SignInFormParameters): Promise<AccountModel> => requests.post(`/auth/signin`, account),
  signup: (account: SignUpFormParameters): Promise<null> => requests.post(`/auth/signup`, account),
}

export default { Account }

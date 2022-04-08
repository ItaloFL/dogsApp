import {
  createContext,
  useState,
  FC,
  useEffect,
  MouseEventHandler
} from 'react'
import { useNavigate } from 'react-router-dom'
import { GET_USER, LOGIN_USER } from '../services/api'

type UserType = {
  name: string
  email: string
}

type ContextType = {
  userLogin: Function
  getUser: Function
  userLogout: MouseEventHandler<HTMLButtonElement>
  data: UserType | null
  login: boolean
  loading: boolean
  error: string | null
}

export const UserContext = createContext({} as ContextType)

export const UserStorage: FC = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          setError(null)
          setLoading(true)
          await getUser(token)
        } catch (error) {
          userLogout()
        } finally {
          setLoading(false)
        }
      }
    }
    autoLogin()
  }, [userLogout])

  async function getUser(token: string) {
    const { url, options } = GET_USER(token)
    const userResponse = await fetch(url, options)
    const json = await userResponse.json()
    setData(json)
    setLogin(true)
  }

  async function userLogin(email: string, password: string) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = LOGIN_USER({ email, password })
      const tokenResponse = await fetch(url, options)
      if(!tokenResponse.ok) throw new Error(`Error: Usuário ou senha incorretos`)
      const { token } = await tokenResponse.json()
      localStorage.setItem('token', token)
      await getUser(token)
      navigate('/conta')
    } catch (error: any) {
      setError(error.message);
      setLogin(false);
    }
    finally {
      setLoading(false)
    }
  }

  async function userLogout() {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <UserContext.Provider value={{ userLogin, getUser, userLogout, data, login, loading, error }}>
      {children}
    </UserContext.Provider>
  )
}

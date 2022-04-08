import { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { LoginCreate } from './LoginCreate'
import { LoginForgotPassword } from './LoginForgotPassword'
import { LoginForm } from './LoginForm'
import { LoginResetPassword } from './LoginResetPassword'
import { LoginWrapper } from './style'

export const Login = () => {
  const { login } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (login === true) navigate('/conta')
  }, [login])
  
  return (
    <LoginWrapper>
      <div className='forms'>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="forgot" element={<LoginForgotPassword />} />
          <Route path="reset" element={<LoginResetPassword />} />
        </Routes>
      </div>
    </LoginWrapper>
  )
}

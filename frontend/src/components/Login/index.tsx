import { Route, Routes } from "react-router-dom"
import { LoginCreate } from "./LoginCreate"
import { LoginForgotPassword } from "./LoginForgotPassword"
import { LoginForm } from './LoginForm'
import { LoginResetPassword } from "./LoginResetPassword"



export const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="create" element={<LoginCreate/>}/>
        <Route path="forgot" element={<LoginForgotPassword/>}/>
        <Route path="reset" element={<LoginResetPassword/>}/>
      </Routes>
    </div>
  )
}
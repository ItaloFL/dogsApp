import { FC, useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"



export const ProtectedRoute: FC<any> = ({ children }) => {
  
  const { login } = useContext(UserContext)

  return login ? children: <Navigate to={'/login'}/>
}
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Dogs from '../../assets/dogs.svg'
import { UserContext } from '../../context/UserContext'
import { HeaderWrapper, NavigateWrapper } from './style'

export const Header = () => {
  const { data, userLogout } = useContext(UserContext)
  return (
    <HeaderWrapper>
      <NavigateWrapper className="container">
        <Link to="/" aria-label="Dogs - Home">
          <img className="logo" src={Dogs} alt="Icone Dogs" />
        </Link>
        {data ? (
          <Link className="login" to="/conta">
            {data.name}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login / Criar
          </Link>
        )}
      </NavigateWrapper>
    </HeaderWrapper>
  )
}

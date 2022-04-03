import { Link, Navigate } from 'react-router-dom'
import Dogs from '../../assets/dogs.svg'
import { HeaderWrapper, NavigateWrapper } from './style'

export const Header = () => {
  return (
    <HeaderWrapper>
      <NavigateWrapper className="container">
        <Link to="/" aria-label="Dogs - Home">
          <img className='logo' src={Dogs} alt="Icone Dogs" />
        </Link>
        <Link className='login' to="/login">Login / Criar</Link>
      </NavigateWrapper>
    </HeaderWrapper>
  )
}

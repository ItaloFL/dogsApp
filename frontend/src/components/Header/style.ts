import styled from 'styled-components'
import dog from '../../assets/usuario.svg'

export const HeaderWrapper = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: #ffffff;
  top: 0;
`

export const NavigateWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding: 0.5rem 0;
  }

  .login {
    display: flex;
    align-items: center;
  }

  .login::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${dog}) no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`

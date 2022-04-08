import styled from "styled-components";
import loginImage from '../../assets/login.jpg'



export const LoginWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: '';
    display: block;
    background: url(${loginImage}) no-repeat center center;
    background-size: cover;
  }

  .forms {
    max-width: 30rem;
    padding: 1rem;
  }


  @media (max-width: 40rem){
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }

    .forms {
      max-width: 100%;
    }
  }
`
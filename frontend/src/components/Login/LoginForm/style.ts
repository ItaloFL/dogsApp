import styled from 'styled-components'

export const FormWrapper = styled.form`
  margin-bottom: 2rem;
`

export const CadastroWrapper = styled.div`
  margin-top: auto;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .subtitle {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;

    &::after {
      content: '';
      display: block;
      background: #ddd;
      height: 0.5rem;
      width: 3rem;
      border-radius: 0.2rem;
    }
  }
`

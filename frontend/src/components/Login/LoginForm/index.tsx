import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import { useForm } from '../../../hooks/useForm'
import { StyledButton } from '../../Button/style'
import { Error } from '../../Helper'
import { Input } from '../../Input'
import { CadastroWrapper, FormWrapper } from './style'

export const LoginForm = () => {
  const email = useForm('email')
  const password = useForm()

  const { userLogin, error, loading } = useContext(UserContext)

  async function handleSubmit(event: any) {
    event.preventDefault()

    if (email.validate() && password.validate()) {
      await userLogin(email.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <FormWrapper action="" onSubmit={handleSubmit}>
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <StyledButton disabled>Carregando...</StyledButton>
        ) : (
          <StyledButton>Entrar</StyledButton>
        )}
        <Error error={error} />
      </FormWrapper>
      <Link className="forgot" to="/login/forgot">
        Perdeu a senha?
      </Link>
      <CadastroWrapper>
        <h2 className="subtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Castre-se no site</p>
        <StyledButton>
          <Link className="button-create" to="/login/create">
            Cadastro
          </Link>
        </StyledButton>
      </CadastroWrapper>
    </section>
  )
}

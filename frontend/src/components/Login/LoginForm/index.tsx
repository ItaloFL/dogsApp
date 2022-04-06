import { Link } from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'
import { GET_USER, LOGIN_USER } from '../../../services/api'
import { StyledButton } from '../../Button/style'
import { Input } from '../../Input'

export const LoginForm = () => {
  const email = useForm('email')
  const password = useForm()

  async function getUser(token: string) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json()
  }

  async function handleSubmit(event: any) {
    event.preventDefault()

    if (email.validate() && password.validate()) {
      const { url, options } = LOGIN_USER({
        email: email.value,
        password: password.value
      })
      
      const response = await fetch(url, options)
      const json = await response.json();
      localStorage.setItem('token', json.token)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <StyledButton>Entrar</StyledButton>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  )
}

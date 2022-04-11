import { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import { useFetch } from '../../../hooks/useFetch'
import { useForm } from '../../../hooks/useForm'
import { USER_CREATE } from '../../../services/api'
import { StyledButton } from '../../Button/style'
import { Error } from '../../Helper'
import { Input } from '../../Input'

export const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()
  const { loading, error, request } = useFetch()

  const { userLogin } = useContext(UserContext)

  async function handleSubmit(event: any) {
    event.preventDefault()
    const { url, options } = USER_CREATE({
      name: username.value,
      email: email.value,
      password: password.value
    })
    const { response } = await request(url, options)
    if(response.ok) await userLogin(email.value, password.value);
  }

  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <StyledButton disabled>Cadastrando...</StyledButton> : <StyledButton>Cadastrar</StyledButton>}
        <Error error={error}/>
      </form>
    </div>
  )
}

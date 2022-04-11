import React, { ChangeEvent, FormEventHandler, useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { useForm } from '../../../hooks/useForm'
import { PHOTO_POST } from '../../../services/api'
import { StyledButton } from '../../Button/style'
import { Input } from '../../Input'

type ImageType = {
  raw: any
}

export const UserPhotoPost = () => {
  const nome = useForm()
  const idade = useForm()
  const peso = useForm()
  const [img, setImg] = useState('')
  const { data, error, loading, request } = useFetch()

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const formData = new FormData()
    formData.append('name', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)
    formData.append('image', img)

    const token = localStorage.getItem('token') as string;
    const { url, options } = PHOTO_POST(formData, token)
    request(url, options)
  }

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {

  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...nome} />
        <Input label="Idade" type="text" name="idade" {...idade} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <input type="file" name="img" id="img" onChange={handleChange} />
        <StyledButton>Enviar</StyledButton>
      </form>
    </section>
  )
}

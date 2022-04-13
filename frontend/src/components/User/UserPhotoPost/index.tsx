import React, { ChangeEvent, FormEventHandler, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import { useForm } from '../../../hooks/useForm'
import { PHOTO_POST } from '../../../services/api'
import { StyledButton } from '../../Button/style'
import { Error } from '../../Helper'
import { Input } from '../../Input'
import { PhotoWrapper, PreviewWrapper } from './style'

type ImageType = {
  preview: any
  raw: any
}

export const UserPhotoPost = () => {
  const nome = useForm()
  const idade = useForm()
  const peso = useForm()
  const [img, setImg] = useState({} as ImageType)
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate();

  useEffect(() => {
    if(data) navigate('/conta')
  }, [data, navigate])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const formData = new FormData()
    formData.append('name', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)
    formData.append('image', img.raw)

    const token = localStorage.getItem('token') as string
    const { url, options } = PHOTO_POST(formData, token)
    request(url, options)
  }

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setImg({
      preview: URL.createObjectURL(target.files![0]),
      raw: target.files![0]
    })
  }

  return (
    <PhotoWrapper>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...nome} />
        <Input label="Idade" type="text" name="idade" {...idade} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <input
          className="file"
          type="file"
          name="img"
          id="img"
          onChange={handleChange}
        />
        {loading ? (
          <StyledButton disabled>Enviando...</StyledButton>
        ) : (
          <StyledButton>Enviar</StyledButton>
        )}
        <Error error={error}/>
      </form>
      <div>
        {img.preview && (
          <PreviewWrapper
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></PreviewWrapper>
        )}
      </div>
    </PhotoWrapper>
  )
}

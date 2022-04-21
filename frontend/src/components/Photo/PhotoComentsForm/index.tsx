import { FormEvent, useEffect, useRef, useState } from 'react'
import Enviar from '../../../assets/enviar.svg'
import { useFetch } from '../../../hooks/useFetch'
import { COMMENT_POST } from '../../../services/api'
import { Error } from '../../Helper'
import { FormContainer, PhotoButton } from './style'

type PhotoComentsForm = {
  id: string,
  setComments: React.Dispatch<React.SetStateAction<any>>
}

export const PhotoComentsForm = ({ id, setComments }: PhotoComentsForm) => {
  const [coment, setComment] = useState('')
  const { request, error } = useFetch()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const { url, options } = COMMENT_POST(id, { coment })
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments((coments: any) => [...coments, json])
    }
  }

 

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <textarea
          id="coment"
          name="coment"
          placeholder="Comente..."
          value={coment}
          onChange={({ target }) => setComment(target.value)}
        />
        <PhotoButton type="submit">
          <img src={Enviar} alt="" />
        </PhotoButton>
        <Error error={error} />
      </FormContainer>
    </>
  )
}

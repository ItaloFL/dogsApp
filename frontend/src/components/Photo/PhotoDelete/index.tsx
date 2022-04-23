import { useFetch } from '../../../hooks/useFetch'
import { useForm } from '../../../hooks/useForm'
import { DELETE_PHOTO } from '../../../services/api'
import { ButtonDelete } from './style'

type PropsPhotoDelete = {
  id: string
}

export const PhotoDelete = ({ id }: PropsPhotoDelete) => {
  const { data, loading, request } = useFetch()

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja cancelar?')
    if (confirm) {
      const { url, options } = DELETE_PHOTO(id)
      const { response } = await request(url, options)
      if (response.ok) window.location.reload()
    }
  }

  return (
    <>
      {loading ? (
        <ButtonDelete disabled>Deletando...</ButtonDelete>
      ) : (
        <ButtonDelete onClick={handleClick}>Deletar</ButtonDelete>
      )}
    </>
  )
}

import React, { MouseEvent, MouseEventHandler, useEffect } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { PHOTO_GET } from '../../../services/api'
import { Error } from '../../Helper'
import { Loading } from '../../Helper/Loading'
import { PhotoContent } from '../../Photo/PhotoContent'
import { ModalWrapper } from './style'

export const FeedModal = ({ photo, setModalPhoto }: any) => {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  function clickOutsideClick({ target, currentTarget }: MouseEvent) {
    if(target === currentTarget) setModalPhoto(null)
  }

  return (
    <ModalWrapper onClick={clickOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </ModalWrapper>
  )
}

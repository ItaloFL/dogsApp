import { useEffect, useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { PHOTOS_GET } from '../../../services/api'
import { Error } from '../../Helper'
import { Loading } from '../../Helper/Loading/Loading'

import { FeedPhotosItem } from './FeedPhotosItem'
import { FeedWrapper } from './style'

export type PhotoType = {
  id: string
  name: string
  peso: string
  idade: string
  image: string
}

export const FeedPhotos = ({setModalPhoto}: any) => {
  const { data, loading, error, request } = useFetch([])

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET()
      const { response, json } = await request(url, options)
    }
    fetchPhotos()
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <FeedWrapper className='animeLeft'>
        {data?.map((photo: PhotoType) => (
          <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
        ))}
      </FeedWrapper>
    )
  return null
}

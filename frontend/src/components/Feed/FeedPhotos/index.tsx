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

export type FeedPhotoType = {
  setModalPhoto: React.Dispatch<React.SetStateAction<null>>
  skip: number
  setInfinite: React.Dispatch<React.SetStateAction<boolean>>
}

export const FeedPhotos = ({ setModalPhoto, skip, setInfinite }: FeedPhotoType) => {
  const { data, loading, error, request } = useFetch([])

  useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({ skip, take: 3 })
      const { response, json } = await request(url, options)
      if(response && response.ok && json.length < total) setInfinite(false)
      console.log(json)
    }
    fetchPhotos()
  }, [request, skip, setInfinite])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <FeedWrapper className="animeLeft">
        {data?.map((photo: PhotoType) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </FeedWrapper>
    )
  return null
}

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext, UserType } from '../../../context/UserContext'
import { Image } from '../../Helper/Image/Image'
import { PhotoComents, PostType } from '../PhotoComents'
import { PhotoDelete } from '../PhotoDelete'
import {
  Atributes,
  Author,
  ImagePhoto,
  PhotoContainer,
  PhotoDatails
} from './style'

export type DataType = {
  data: {
    Coments: CommentType[]
    id: string
    idade: string
    image: string
    name: string
    peso: string
    user: {
      id: string
      name: string
      email: string
    }
  }
}

export type CommentType = {
  id: string
  user: UserType
  postId: PostType
  coment: string
}

export const PhotoContent = ({ data }: DataType) => {
  const user = useContext(UserContext)
  return (
    <PhotoContainer>
      <ImagePhoto>
        <Image src={data.image} alt={data.name}/>
      </ImagePhoto>
      <PhotoDatails>
        <div>
          <Author>
            {user.data && user.data.name === data.user.name ? (
              <PhotoDelete id={data.id} />
            ) : (
              <Link to={`/profile/${data.user.name}`}>@{data.user.name}</Link>
            )}
            <span>{data.peso}</span>
          </Author>
          <h1 className="title">
            <Link to={`/photo/${data.name}`}>@{data.name}</Link>
          </h1>
          <Atributes>
            <li>{data.peso} kg</li>
            <li>{data.idade} anos</li>
          </Atributes>
        </div>
      </PhotoDatails>
      <PhotoComents id={data.id} Coments={data.Coments} />
    </PhotoContainer>
  )
}

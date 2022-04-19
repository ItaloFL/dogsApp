import { Link } from 'react-router-dom'
import { PhotoComents } from '../PhotoComents'
import { Atributes, Author, ImagePhoto, PhotoContainer, PhotoDatails } from './style'

export type DataType = {
  data: {
    Coments: []
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

export const PhotoContent = ({ data }: DataType) => {
  return (
    <PhotoContainer>
      <ImagePhoto>
        <img src={data.image} />
      </ImagePhoto>
      <PhotoDatails>
        <div>
          <Author>
            <Link to={`/profile/${data.user.name}`}>@{data.user.name}</Link>
            <span>{data.peso}</span>
          </Author>
          <h1 className='title'>
            <Link to={`/photo/${data.name}`}>@{data.name}</Link>
          </h1>
          <Atributes>
             <li>{data.peso} kg</li>
             <li>{data.idade} anos</li>
          </Atributes>
        </div>
      </PhotoDatails>
      <PhotoComents id={data.id} comments={data.Coments}/>
    </PhotoContainer>
  )
}

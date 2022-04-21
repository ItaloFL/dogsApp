import { createRef, useContext, useEffect, useRef, useState } from 'react'
import { UserContext, UserType } from '../../../context/UserContext'
import { PhotoComentsForm } from '../PhotoComentsForm'
import { ComentsWrapper } from './style'

export type CommentType = {
  id: string
  user: UserType
  postId: PostType
  coment: string
}

export type PostType = {
  id: string
  name: string
  peso: string
  idade: string
  image: string
  author: string
  Coments: CommentType[]
}

export const PhotoComents = ({ id, Coments }: any) => {
  const [comments, setComments] = useState(() => Coments)
  const commentSection = useRef<HTMLUListElement | null>(null)
  const { login } = useContext(UserContext)

  useEffect(() => {
    if (commentSection.current) {
      commentSection.current.scrollTop = commentSection.current?.scrollHeight
    }
  }, [comments])

  return (
    <>
      <ComentsWrapper ref={commentSection}>
        {comments?.map((comment: CommentType) => (
          <li key={comment.id}>
            <b>{comment.user.name}: </b>
            <span>{comment.coment}</span>
          </li>
        ))}
      </ComentsWrapper>
      {login && <PhotoComentsForm id={id} setComments={setComments} />}
    </>
  )
}

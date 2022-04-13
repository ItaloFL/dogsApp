import { FeedItemWrapper } from "./style"



export const FeedPhotosItem = ({ photo, setModalPhoto }: any) => {

  function handleClick(){
    setModalPhoto(photo)
  }

  return (
    <FeedItemWrapper onClick={handleClick}>
      <img src={photo.image} alt={photo.name} />
      <span>Corno</span>
    </FeedItemWrapper>
  )
}

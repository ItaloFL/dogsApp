
import { Image } from "../../../Helper/Image/Image"
import { FeedItemWrapper } from "./style"



export const FeedPhotosItem = ({ photo, setModalPhoto }: any) => {

  function handleClick(){
    setModalPhoto(photo)
  }

  return (
    <FeedItemWrapper onClick={handleClick}>
      <Image src={photo.image} alt={photo.name}/>
      <span>Corno</span>
    </FeedItemWrapper>
  )
}

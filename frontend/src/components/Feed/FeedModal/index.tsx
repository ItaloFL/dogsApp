import { useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch"
import { PHOTO_GET } from "../../../services/api";
import { Error } from "../../Helper";
import { Loading } from "../../Helper/Loading";
import { PhotoContent } from "../../Photo/PhotoContent";




export const FeedModal = ({photo}: any) => {

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  return (
    <div>
      {error && <Error error={error}/>}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </div>
  )
}
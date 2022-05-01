import { useEffect, useState } from 'react'
import { FeedModal } from './FeedModal'
import { FeedPhotos } from './FeedPhotos'

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null)
  const [pages, setPages] = useState([0])
  const [infinite, setInfinite] = useState(true)
  console.log(pages)

  useEffect(() => {
    function infiniteScroll() {
      let wait = false
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight

        if (scroll > height * 0.75 && !wait) {
          setPages(pages => [...pages, pages[pages.length - 1] + 3])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }

    addEventListener('wheel', infiniteScroll)
    addEventListener('scroll', infiniteScroll)

    return () => {
      removeEventListener('wheel', infiniteScroll)
      removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite, setPages])

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map(page => (
        <FeedPhotos
          key={page}
          skip={page}
          setInfinite={setInfinite}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </div>
  )
}

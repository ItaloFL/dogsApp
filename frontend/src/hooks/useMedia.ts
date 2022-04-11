import { useEffect, useState } from "react"



export const useMedia = (media: string) => {

  const [match, setMatch] = useState(false);

  useEffect(() => {
    function handleMatch(){
      const { matches } = matchMedia(media);
      setMatch(matches)
    }
    handleMatch()
    addEventListener('resize', handleMatch)
    return () => {
      removeEventListener('resize', handleMatch)
    }
  }, [media])

  return match;
}
import { useCallback, useState } from 'react'

export const useFetch = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  let response: Response;
  
  const request = useCallback(async (url, options) => {
    let json;
    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options);
      console.log(response)
      json = await response.json();
      if(response.ok === false) throw new Error('Dados Incompletos')
    } catch (error: any) {
      json = null; 
      setError(error.message)
    } finally {
      setData(json)
      setLoading(false)
      return { json, response }
    }
  }, [])

  return {
    data,
    error,
    loading,
    request
  }
}

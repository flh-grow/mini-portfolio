import { useState, useEffect } from 'react'

export function useGit(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect (() => {
    async function load() {
      try {
        const response = await fetch (url)

        if (!response.ok) {
  throw new Error('GitHub request failed')
}
        const json = await response.json()
        setData(json)

      } catch(error) {
        setError('Something went wrong 😢')
       } finally {
              setLoading(false)
       }
      }
      load()
    
  }, [url])
  return {data, loading, error}
}
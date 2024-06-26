import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error))
    }, [url])
    
  return [data]
}

export default useFetch
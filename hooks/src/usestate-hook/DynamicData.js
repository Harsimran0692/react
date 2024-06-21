import React, {useState, useEffect} from 'react'

const DynamicData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/Harsimran0692')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    if(!data){
        return <div>Loading....</div>
    }
  return (
    <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default DynamicData
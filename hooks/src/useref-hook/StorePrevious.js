import React, {useState, useEffect, useRef} from 'react'

const StorePrevious = () => {
    const [value, setValue] = useState('');
    // its like previous = {current: ''}
    const previous = useRef('');
    useEffect(() => {
        previous.current = value
    }, [value])
  return (
    <div>
        <input type='text' value={value} onChange={(e) => {setValue(e.target.value)}} />
        <h3>{`Current: ${value}`}</h3>
        <h3>{`Previous: ${previous.current}`}</h3>
    </div>
  )
}

export default StorePrevious
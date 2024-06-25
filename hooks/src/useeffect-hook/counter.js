import React, {useState, useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000)
    }, [count])
    const changeCount = () => {
        setCount(count + 1);
    }

  return (
    <div>
        {`Counter: ${count}`}<br/>
        <button onClick={changeCount}>Count</button>
    </div>
  )
}

export default Counter
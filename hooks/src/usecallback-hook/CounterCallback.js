import React, {useState, useCallback} from 'react'

const CounterCallback = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  }, [])
  
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count])


  return (
    <div>
      <h3>{`Count: ${count}`}</h3>
      <button onClick={handleClick}>Increment</button>
      <input type='text' value={input} onChange={handleChange} />

    </div>
  )
}

export default CounterCallback
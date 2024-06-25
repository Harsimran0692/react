import React, {useState, useRef, useEffect} from 'react'

const PersistingValue = () => {
//     const [count, setCount] = useState(0)
//     const [value, setValue] = useState("")
//     const renders = useRef(0)

//     useEffect(() => {
//         renders.current = renders.current + 1;
//     })
//   return (
//     <div>
//         <h3>{`Count: ${count}`}</h3>
//         <h3>{`Renders: ${renders.current}`}</h3>
//         <input type='text' value={value} onChange={(e) => {setValue(e.target.value)}} />
//         <h3>{`Input-Renders: ${renders.current}`}</h3>
//         <button onClick={() => setCount(count + 1)}>Increase Count</button>
//     </div>
//   )
const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default PersistingValue
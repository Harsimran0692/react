import React, { useState } from 'react'

const UseState1 = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState({});
  const [displayValue, setDisplayValue] = useState({});

  

  // const [user, setUser] = useState({
  //   fullName: "",
  //   country: ""
  // });
  // const updateUser = (e) => {
  //   e.preventDefault();
  //   setUser(data => ({
  //     ...data,
  //     fullName: inputValue.fullName || "",
  //     country: inputValue.country || ""
  //   })
  //   )
  // }
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    console.log(inputValue);
    setInputValue(values => ({
      ...values,
      [name]: value
    }))
    setTimeout(() => {
      
      setDisplayValue(values => ({
        ...values,
        [name]: value
      }))
    }, 3000)
  }
  const updateCount = () => {
    setCount(prevCount => prevCount + 1);
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={updateCount}>Click</button>
      <form>
        <input type='text' placeholder='FullName' onChange={handleInputChange} value={inputValue.fullName || ""} name='fullName'/>
        <input type='text' placeholder='Country' onChange={handleInputChange} value={inputValue.country || ""} name='country'/>
        <input type='submit' />
      </form>
      <p>{`Name: ${displayValue.fullName || ""}`}</p>
      <p>{`Country: ${displayValue.country || ""}`}</p>
    </div>
  )
}

export default UseState1
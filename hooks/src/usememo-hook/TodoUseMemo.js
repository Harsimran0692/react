/*
In the below example if we dont use the useMemo hook it calculate function will run on every render even when we are creating a todo list.
This impact the overall performance. To overcome this issue useMemo is used when enables the calculate func to render only when count is changed.

Note: useMemo is similar to useCallback only diff is useMemo returns the value while useCallback returns the function.
*/

import React, {useState, useMemo} from 'react'

const calculate = (num) => {
    console.log("Calculating....");
    for(let i = 0; i < 1000000000; i++){
        num += 1;
    }
    return num;
}

const TodoUseMemo = () => {
    const [input, setInput] = useState('');
    const [count, setCount] = useState(0);
    const [todos, createTodos] = useState([]);
    const calculations = useMemo(() => calculate(count), [count]);

    const addTodo = () => {
        createTodos([...todos, input])
    }
    
    const handleCount = () => {
        setCount(count + 1);
    }

  return (
    <div>
        <input type='text' value={input} onChange={(e) => {setInput(e.target.value)}} />
        <button onClick={addTodo}>Create Todo</button><br/><br/>

        <ul>
            {todos.map((data, id) => (
                <li key={id}>{data}</li>
            ))}
        </ul>

        <h3>{`Count: ${count}`}</h3>
        <button onClick={handleCount}>+</button>
        
        <h2>Calculation</h2>
        <h4>{calculations}</h4>

    </div>
  )
}

export default TodoUseMemo
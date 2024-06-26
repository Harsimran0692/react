/*
usecallback is used to memoize the function between the renders means function will render only when the specific dependencies changes.
This improves the performance specially when passing the function from parent o child.

When to Use useCallback:

--->Passing Callbacks to Child Components: If you pass a callback function to a child component, wrapping the callback in useCallback can prevent 
unnecessary re-renders of the child component.

--->Avoiding Re-Creation of Functions: If you have a function that performs a complex calculation or is computationally expensive to recreate, 
useCallback can help you avoid doing so unnecessarily.
*/

import React, {useState, useCallback} from 'react';

const Todo = ({todo, addTodo}) => {
    console.log('Child Component')
    return(
        <div>
            <button onClick={addTodo}>Create</button>
            <ul>
                {todo.map((data, id) => (
                    <li key={id}>{data}</li>
                ))}
            </ul>
        </div>
    );
}


const TodoCallBack = () => {
    const [input, setInput] = useState('');
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);


    const handleChange = (e) => {
        setInput(e.target.value);
    }
    
    const addTodo = useCallback(() => {
        setTodo((todos) => [...todos, input]);
    }, [input])
    
    

  return (
    <div>
        <h3>{`Count: ${count}`}</h3>
        <button onClick={() => setCount(count + 1)}>+</button><br /><br />
        <input type='text' value={input} onChange={handleChange} />
        <Todo todo={todo} addTodo={addTodo}/>

    </div>
  )
}

export default TodoCallBack
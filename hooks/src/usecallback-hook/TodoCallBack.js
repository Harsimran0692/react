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
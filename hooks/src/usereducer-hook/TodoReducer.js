import React, {useReducer, useState} from 'react';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'toggle':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'remove':
      return state.filter(todo => todo.id !== action.payload);
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const TodoReducer = () => {
  //   const [input, setInput] = useState('');
  //   const [task, createTask] = useState([]);

  //   const createTodo = () => {
  //     if(input !== '' && input.trim()){
  //       createTask([...task, input]);
  //       setInput('');
  //     }
  //   }
  //   const deleteTodo = (id) => {
  //     const newTask = task.slice();
  //     newTask.splice(id, 1);
  //     createTask(newTask);
  //   }

  // return (
  //   <div>
  //       <input type='text' value={input} onChange={(e) => {setInput(e.target.value)}} />
  //       <button onClick={() => createTodo()}>Create Todo</button>
  //       {task.map((data, id) => (
  //           <div key={id}>
  //             <h4>{data}</h4>
  //             <button onClick={() => {deleteTodo(id)}}>Delete Todo</button>
  //           </div>
  //       ))}
  //   </div>
  // )

  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    dispatch({ type: 'add', payload: newTodo });
    setNewTodo('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'remove', payload: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default TodoReducer
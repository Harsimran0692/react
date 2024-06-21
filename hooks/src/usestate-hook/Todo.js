import React, {useState} from 'react'

const Todo = () => {
//     const [todoValue, setTodoValue] = useState("");
//     const [item, setItem] = useState([]);

//     const addTodo = (e) => {
//         e.preventDefault();
//         if(todoValue !== "" && todoValue.trim()){
//             setItem([...item, todoValue]);
//             setTodoValue("");
//         }
//     }
//     const clearList = (e) => {
//         e.preventDefault();
//         setItem([]);
//     }
//     const removeItem = (index) => {
//         setItem(item.filter((_, i) => i !== index));
//     }
//   return (
//     <div>
//         <h1>TODO APP</h1>
//         <form>
//             <input type='text' name='text' value={todoValue} onChange={(e) => {setTodoValue(e.target.value)}} />
//             <input type='submit' onClick={addTodo}/>
//             <input type='button' value={"Clear"} onClick={clearList}/>
//         </form>
//         <ul>
//             {item.map((data, id) => (
//                 <div key={id}>
//                     <li id={id}>{data}</li>
//                     <button id={id} name='remove' onClick={() => removeItem(id)}>Remove</button>
//                 </div>
//             ))}
//         </ul>
//     </div>
//   )


const [tasks, setTasks] = useState([]);
const [value, setValue] = useState("");

const addTask = (e) => {
    e.preventDefault();
    console.log(tasks);
    if(value !== "" && value.trim()){
        setTasks([
            ...tasks,
            value
        ]);
        setValue("");
    }
}
const deleteTask = (index) => {
    const newTask = tasks.slice();

    newTask.splice(index, 1);
    setTasks(newTask);
}

return(
    <div>
        <form>
            <input type='text' placeholder='Enter your task' value={value} onChange={(e) => {setValue(e.target.value)}}/>
            <button onClick={(e) => addTask(e)}>Create Task</button>
        </form>
        {tasks.map((data, id) => (
            <div key={id}>
                <h3>{data}</h3>
                <button onClick={() => deleteTask(id)}>Delete Task</button>
            </div>
        ))}
    </div>
)













}

export default Todo
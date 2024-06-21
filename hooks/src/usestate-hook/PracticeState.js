import React, {useState} from 'react';
  

const PracticeState = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks([
            ...tasks,
            { taskName: 'Enter Task', id: Date.now(), subTasks: [] }
        ]);
    };

    const addSubTask = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, subTasks: [...task.subTasks, { id: Date.now(), subTaskName: '' }] } : task
        ));
    };

    const deleteTask = (taskId, e) => {
        e.preventDefault();
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const handleChange = (taskId, e) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, taskName: e.target.value } : task
        ));
    };

    const handleSubTaskChange = (taskId, subTaskId, e) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? {
                ...task, subTasks: task.subTasks.map(subTask => 
                    subTask.id === subTaskId ? { ...subTask, subTaskName: e.target.value } : subTask
                )
            } : task
        ));
    };

    const deleteSubTask = (taskId, subTaskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? {
                ...task, subTasks: task.subTasks.filter(subTask => subTask.id !== subTaskId)
            } : task
        ));
    };

    return (
        <div>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <form>
                            <input 
                                type="text" 
                                placeholder="Task Name" 
                                value={task.taskName} 
                                onChange={(e) => handleChange(task.id, e)} 
                            />
                            <button onClick={(e) => deleteTask(task.id, e)}>Delete Task</button>
                            <button type="button" onClick={() => addSubTask(task.id)}>Add Subtask</button>
                        </form>
                        <ul>
                            {task.subTasks.map(subTask => (
                                <li key={subTask.id}>
                                    <input 
                                        type="text" 
                                        placeholder="Subtask Name" 
                                        value={subTask.subTaskName} 
                                        onChange={(e) => handleSubTaskChange(task.id, subTask.id, e)} 
                                    />
                                    <button onClick={() => deleteSubTask(task.id, subTask.id)}>Delete Subtask</button>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PracticeState
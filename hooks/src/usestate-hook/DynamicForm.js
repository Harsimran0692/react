import React, {useState} from 'react'

// used to add and remove form fields
const DynamicForm = () => {
    const [value, setValue] = useState("");
    const [field, setField] = useState([{
        type: 'text',
        placeholder: 'Enter Something....',
        value: value,
    }])

    const handleChange = (id, e) => {
        e.preventDefauld();
        const newField = field.slice();
        newField[id].value = e.target.value;
        setField(newField);
    }

    const addField = (e) => {
        e.preventDefauld();
        setField([...field, {
            type: 'text',
            placeholder: 'Enter Something....',
            value: value,
        }]);
    }
    
    const deleteField = (id, e) => {
        e.preventDefauld();
        const newField = field.slice();
        newField.splice(id, 1);
        setField(newField);
    }

  return (
    <div>
            {field.map((data, id) => (
                <form key={id}>
                    <input type={data.type} placeholder={data.placeholder} value={data.value} onChange={(e) => {handleChange(id, e)}}/>
                    <input type='button' value={"Delete"} onClick={(e) => deleteField(id, e)}/>
                </form>
            ))}
            <button onClick={addField}>Add Field</button>
    </div>
  )
}

export default DynamicForm
import React, {useState} from 'react'

const ArrayState = () => {
    const [list, setList] = useState([]);
    const [item, getItem] = useState("");

    const addElement = (e) => {
        e.preventDefault();

        if(item !== "" && item.trim()){
            setList([...list, item]);
            getItem("");
        }
    };

  return (

    <div>
        <form>
            <input type='text' placeholder='Add Item Name' value={item} onChange={(e) => {getItem(e.target.value)}}/>
            <input type='submit' onClick={addElement}/>
        </form>
        <ul>
            {
                list.map((item, id) => (
                    <li key={id}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ArrayState
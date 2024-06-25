import React, {useContext, useState} from 'react';
import { UserContext } from '../App';

const Child1 = () => {
    const [value, setValue] = useState('');
    const {user, setUser} = useContext(UserContext);

    const enterValue = () => {
        setUser((prevUser) => ({
            ...prevUser,
            designation: value
        }))
        setValue('');
    }

    const HandleObject = ({obj}) => {
        return(
            <ul>
                {Object.entries(obj).map(([key, val]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {val}
                    </li>
                ))}
            </ul>
        )
    }
    return(
        <div>
            <HandleObject obj={user}/>
            <input type='text' value={value} onChange={(e) => {setValue(e.target.value)}} placeholder='Enter Designation'/>
            <button onClick={enterValue}>Submit</button>
        </div>
        
    )
}

export default Child1;
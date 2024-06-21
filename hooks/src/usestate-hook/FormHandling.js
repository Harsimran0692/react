import React, {useState} from 'react'

const FormHandling = () => {
    const [value, setValue] = useState({});

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;

        setValue(values => ({
            ...values,
            [name]: value
        }))
    };

  return (
    <div>
        <form>
            <input type='text' placeholder='UserName' autoComplete='username' name='username' value={value.username || ""} onChange={handleChange} />
            <input type='password' placeholder='Password' autoComplete='current-password' name='password' value={value.password || ""} onChange={handleChange} />
        </form>
        <h3>{`Username: ${value.username}`}</h3>
        <h3>{`Password: ${value.password}`}</h3>
    </div>
  )
}

export default FormHandling
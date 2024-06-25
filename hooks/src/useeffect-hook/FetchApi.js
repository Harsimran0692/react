/*
Strict Mode in Development: React's Strict Mode causes double invocations of useEffect to detect potential side effects.
Double API Calls: This is a development-only behavior and doesn't occur in the production build.
Verification: Removing Strict Mode will demonstrate that the double invocation is due to this development feature.
*/

import React, {useState, useEffect} from 'react'

const FetchApi = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const data = await fetch('https://api.github.com/users');
            const response = await data.json();
            setData(response);
            // console.log(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
            fetchData();
    }, [count]);

    return (
        <div>
            <h3>Count: {count}</h3><br />
            <button onClick={() => setCount(count + 1)}>Increase Count</button><br /><br />
            {data.map((data, id) => (
                <h4 key={id}>{    
                    Object.entries(data).map(([key, val]) => (
                        <p key={key}>{`${key}: ${val}`}</p>
                    ))
                }
                </h4>
            ))}
        </div>
    );
};

export default FetchApi
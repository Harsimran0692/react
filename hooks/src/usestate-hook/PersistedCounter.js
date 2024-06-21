import React, {useState, useEffect} from 'react';

const PersistedCounter = () => {
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('lastCount');
        return savedCount !== null ? Number(savedCount) : 0
    });

    useEffect(() => {
        localStorage.setItem('lastCount', count);
    }, [count])

    const clearAll = () => {
        setCount(0)
        localStorage.clear();
    }
    return(
        <div>
            <h2>Counter with Local Storage</h2>
            <h3>{`Count: ${count}`}</h3>
            <button onClick={() => {setCount(count + 1)}}>Increment Count</button>
            <button onClick={() => {setCount(count - 1)}}>Decrement Count</button>
            <button onClick={clearAll}>Clear Count</button>
        </div>
    )
};

export default PersistedCounter;
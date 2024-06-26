import React from 'react';
import useFetch from './useFetch';

const TodoUseEffect = () => {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');

  console.log(data);
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  )
}

export default TodoUseEffect
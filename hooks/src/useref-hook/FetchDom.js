/*
Use ref hook is used to access the DOM element directly and can manipulate it directly.
It is also use to hold/persist values between renders
It can be used to store mutable values that doesnot cause the re-render when updated
*/

import React, {useRef} from 'react'

const FetchDom = () => {
    //  reference object
    const myRef = useRef(null);
    const focusInput = () => {
        console.log(myRef.current);
        myRef.current.focus();
        myRef.current.placeholder = "Helooo";
        myRef.current.value = "Worlddd";
    };

  return (
    <div>
        <input type='text' ref={myRef} />
        <button onFocus={focusInput}>Focus the Input</button>
    </div>
  )
}

export default FetchDom
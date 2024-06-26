import React, {useState, createContext} from 'react';
// import './App.css';
// import UseState1 from './components/UseState1.js';
// import UseStatePrac1 from './usestate-hook/UseStateprac1.js';
// import FormHandling from './usestate-hook/FormHandling.js';
// import ArrayState from './usestate-hook/ArrayState.js';
// import Todo from './usestate-hook/Todo.js';
// import PersistedCounter from './components/PersistedCounter.js';
// import DynamicData from './usestate-hook/DynamicData.js';
// import DynamicForm from './usestate-hook/DynamicForm.js';
// import ShoppingCart from './usestate-hook/ShoppingCart.js';
// import PracticeState from './usestate-hook/PracticeState.js';
// import Counter from './useeffect-hook/counter.js';
// import FetchApi from'./useeffect-hook/FetchApi.js';
// import Child1 from './usecontext-hook/Child1.js';
// import FetchDom from './useref-hook/FetchDom.js';
// import PersistingValue from './useref-hook/PersistingValue.js';
// import StorePrevious from './useref-hook/StorePrevious.js';
// import CounterReducer from './usereducer-hook/CounterReducer.js';
// import TodoReducer from './usereducer-hook/TodoReducer.js';
// import CounterCallback from './usecallback-hook/CounterCallback.js';
// import TodoCallBack from './usecallback-hook/TodoCallBack.js';
// import TodoUseMemo from './usememo-hook/TodoUseMemo.js';
import TodoUseEffect from './customhook/TodoUseFetch.js';


export const UserContext = createContext();
function App() {
  // for usecontext hook
  // const [user, setUser] = useState({name: 'Amit Kumar', age: 30, country:'canada'});

  return (
    <div>
      {/* <UseState1 /> */}
      {/* <UseStatePrac1 /> */}
      {/* <FormHandling /> */}
      {/* <ArrayState /> */}
      {/* <Todo /> */}
      {/* <PersistedCounter /> */}
      {/* <DynamicData /> */}
      {/* <DynamicForm /> */}
      {/* <ShoppingCart /> */}
      {/* <PracticeState /> */}
      {/* <Counter /> */}
      {/* <FetchApi /> */}
        {/* <UserContext.Provider value={{user, setUser}}>
          <h3>{`Hello ${user.name} from App.js component`}</h3>
          <Child1 />
        </UserContext.Provider> */}
        {/* <FetchDom /> */}
        {/* <PersistingValue /> */}
        {/* <StorePrevious /> */}
        {/* <CounterReducer /> */}
        {/* <TodoReducer /> */}
        {/* <CounterCallback /> */}
        {/* <TodoCallBack /> */}
        {/* <TodoUseMemo /> */}
        <TodoUseEffect />
    </div>
  );
}

export default App;

import './App.css';
import {useState} from 'react';

import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(10);
  const [counters, setCounters] = useState([
    {
      id: 0,
      value: 1
    }
  ]);
  
 const handleBtnToAddArr = () => {
  setCounters([...counters, {
    id: counters[counters.length - 1].id + 1,
    value: 1
  }]);
 };

 const updateCounter = (id, action) => {
  const newCounters = counters.map(item => {
    if (item.id === id){
      const newValue = (action === 'increment') ? item.value + 1 : item.value - 1;
      return {...item, value: newValue};
    }

    return item;
  })
  setCounters([...newCounters]);
 };

 const deleteCounter = (id) => {
  const newCounters = counters.filter(item => item.id !== id);
  setCounters([...newCounters]);
 };

  return (
    <div className="App">
      <button onClick={handleBtnToAddArr}>Add counter</button>
      {counters.map(counter => {
        return <Counter 
                key={counter.id} 
                count={counter.value} 
                id={counter.id} 
                updateCounter={updateCounter}
                deleteCounter={deleteCounter} />
      })}
    </div>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react';
import {InputBox} from './Components/InputBox'
import { ItemBox } from './Components/ItemBox';

function App() {

  const [items,setItems] = useState([]);
  const [query,setQuery] = useState("");

  return (
    <div className="App">
      <h1>Tarkov Info</h1>

      <InputBox query={query} updateQuery={setQuery} setItems={setItems}/>

      <ul>
        {items.map(item => {
          return <ItemBox key={item.Id} item={item}/> 
        })}
      </ul>
    </div>
  );
}

export default App;

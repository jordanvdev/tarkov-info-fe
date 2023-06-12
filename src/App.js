import './App.css';
import React, {useState} from 'react';
import { AmmoResult } from './Components/AmmoResult';
import { InputBox } from './Components/InputBox';
import { QuestResult } from './Components/QuestResult';

function App() {

  const [items,setItems] = useState([]);
  const [query,setQuery] = useState("");
  const [questsTreeOpen,setQuestsTreeOpen] = useState(false);

  return (
    <div className="App">
    
      <h1>Tarkov Info</h1>

      <a href={`/quests/`}>Your Name</a>

      <InputBox query={query} updateQuery={setQuery} setItems={setItems}/>

      <ul>
        {items.map(item => {
          if(item.constructor.name === "Ammo")
            return <AmmoResult key={item.Id} item={item}/> 
          else 
            return <QuestResult key={item.Id} item={item}/>
        })}
      </ul>
    </div>
  );
}

export default App;

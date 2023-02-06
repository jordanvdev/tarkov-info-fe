import './App.css';
import React, {useState} from 'react';
import { Ammo } from './Model/Ammo';

function App() {

  const [items,setItems] = useState([]);
  const [query,setQuery] = useState("");

  const ItemBox = (props) => {
    return (
      <div className="itemBox">{props.item.Name}</div>
    )
  }

  return (
    <div className="App">
      <h1>Tarkov Info</h1>

      <InputBox query={query} updateQuery={setQuery}/>

      <ul>
        {items.map(item => {
          return <ItemBox key={item.Id} item={item}/> 
        })}
      </ul>
    </div>
  );
}

const InputBox = (props) => {

  const _onKeyDown = (event) => {
    if(event.key === "Enter"){
      getAmmo(props.query);
    }
  }

  return (
    <input type="text" placeholder= "Search for an item" value={props.query} onChange={e => props.updateQuery(e.target.value)} onKeyDown={e => _onKeyDown(e)}/>
  )
}

//todo pass state through method param
const getAmmo = (name) => {
  fetch("http://localhost:51572/api/v1/ammo/" + name)
    .then(res => res.json())
    .then(
      (result) => {
        result.array.forEach(element => {
          var ammo = new Ammo(element.id,element.name, element.caliber, element.damage);
          setItems(oldItems => [...oldItems, ammo]);
        });
      },
      
      (error) => {
      }
    )
}

export default App;

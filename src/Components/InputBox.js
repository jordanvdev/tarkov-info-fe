import { getAmmoByName } from "../Http/AmmoRequests";
import { getQuestsByName } from "../Http/QuestRequests";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ItemBox.css'
import React, {useState} from 'react';

export const InputBox = (props) => {
    const [searchType, setSearchType] = useState("ammo");

    const _onKeyDown = (event) => {
      if(event.key === "Enter"){
        props.setItems([]);
        if(props.query === ""){
            toast("Please enter a search term.")
            return;
        }
          
        switch(searchType){
          case "ammo":
            getAmmoByName({name : props.query, setItems : props.setItems});
          break;
          case "quest":
            getQuestsByName({name : props.query, setItems : props.setItems});
        }
        
      }
    }

    const _onSelectChange = (event) => {
      setSearchType(event.target.value);
    }
  
    return (
        <div>
            <input type="text" placeholder= "Search for an item" value={props.query} onChange={e => props.updateQuery(e.target.value)} onKeyDown={e => _onKeyDown(e)}/>
            <select onChange={_onSelectChange}>
              <option value="ammo">Ammo</option>
              <option value="quest">Quest</option>
            </select>
            <ToastContainer />
        </div>
    )
  }
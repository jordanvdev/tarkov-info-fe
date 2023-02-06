import { getAmmoByName } from "../Http/AmmoRequests";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ItemBox.css'

export const InputBox = (props) => {

    const _onKeyDown = (event) => {
      if(event.key === "Enter"){
        props.setItems([]);
        if(props.query == ""){
            toast("Please enter a search term.")
            return;
        }
            
        getAmmoByName({name : props.query, setItems : props.setItems});
      }
    }
  
    return (
        <div>
            <input type="text" placeholder= "Search for an item" value={props.query} onChange={e => props.updateQuery(e.target.value)} onKeyDown={e => _onKeyDown(e)}/>
            <ToastContainer />
        </div>
    
    )
  }
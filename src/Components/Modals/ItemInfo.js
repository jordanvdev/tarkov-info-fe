import ReactDOM from "react-dom";
import './ItemInfo.css'

export const ItemInfoModal = (props) => {
    if(!props.isOpen){
        document.getElementById('root').style.filter = '';
        return null;
    }

    document.getElementById('root').style.filter = 'blur(5px)';

    return ReactDOM.createPortal(
        <div className="itemModal">
            Name : {props.selectedItem.Name} 
            Caliber : {props.selectedItem.Caliber}
            <button className="closeButton" onClick={() => props.onClose()}>Close</button>
        </div>,
        document.body
    )

}
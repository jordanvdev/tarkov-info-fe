import ReactDOM from "react-dom";
import './ItemInfo.css'

export const ItemInfoModal = (props) => {
    if(!props.isOpen)
        return null;

    return ReactDOM.createPortal(
        <div className="itemModal">
            this is an item modal.
            <button onClick={() => props.onClose()}>Close</button>
        </div>,
        document.body
    )
    
}
import ReactDOM from "react-dom";
import './AmmoModal.css'

export const AmmoInfoModal = (props) => {
    if(!props.isOpen){
        document.getElementById('root').style.filter = '';
        return null;
    }

    document.getElementById('root').style.filter = 'blur(5px)';

    return ReactDOM.createPortal(
        <div className="itemModal">
            <h1> {props.selectedItem.Name} </h1>
            <button className="closeButton" onClick={() => props.onClose()}>Close</button>
            <hr></hr>

            <div className="ammoContainer">
                <div className="ammoInfo">
                    <h2>Information</h2>
                    <h3>Caliber : {props.selectedItem.Caliber.substring(7)}</h3>
                </div>

                <div className="ballisticsInfo">
                    <h2> Ballistics </h2>
                    <h3>Caliber : {props.selectedItem.Caliber.substring(7)}</h3>
                </div>

            </div>

            
        </div>,
        document.body
    )
}